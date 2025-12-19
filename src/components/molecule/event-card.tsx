"use server";
import { cva, VariantProps } from "class-variance-authority";
import trans from "@/helpers/i18n/server";
import { BaseHTMLAttributes } from "react";
import { FaCalendarDays, FaLocationDot, FaUsers } from "react-icons/fa6";
import { ImageKit, IconLabel, Button } from "@/components/atom";
import { formatLocaleString } from "@/helpers";
import { RepeatType } from "@/types/base";
import { GetLocaleFromCookie } from "@/services/common";

const cardVariants = cva(
    [
        "event-card",
        "bg-white",
        "rounded-lg",
        "overflow-hidden",
        "shadow-md",
        "flex",
        "flex-col",
        "w-full",
        "transition-shadow",
        "hover:shadow-lg",
    ],
    {
        variants: {
            eventType: {
                Online: [],
                InPlace: [],
            },
        },
    }
);

interface EventCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {
    ikUrl: string;
    title: string;
    desc: string;
    date: string;
    href: string;
    commentsCount: number;
    eventTimeInDay: number;
    repeatType: RepeatType;
    address?: string;
    spotsAvailable?: number;
}

const EventCard = ({
    ikUrl,
    title,
    desc,
    date,
    eventType,
    href,
    address,
    spotsAvailable,
}: EventCardProps) => {
    const locale = GetLocaleFromCookie();
    
    // Format date nicely: "October 20, 2025 - 3:00 PM CET"
    const formatDateForDisplay = (dateString: string): string => {
        if (!dateString) return "";
        const dateObj = new Date(dateString);
        const isRTL = locale === "fa";
        
        // Format date part
        const dateOptions: Intl.DateTimeFormatOptions = {
            month: "long",
            day: "numeric",
            year: "numeric",
        };
        const datePart = dateObj.toLocaleDateString(
            isRTL ? "fa-IR" : "en-US",
            dateOptions
        );
        
        // Format time part
        const timeOptions: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        };
        const timePart = dateObj.toLocaleTimeString(
            isRTL ? "fa-IR" : "en-US",
            timeOptions
        );
        
        // Combine with separator
        return `${datePart} - ${timePart}`;
    };

    // Get location/platform text
    const getLocationText = (): string => {
        if (eventType === "Online") {
            // For online events, show platform if available, otherwise just "Online"
            return address || trans("common.online");
        }
        return address || trans("common.location");
    };

    return (
        <div className={cardVariants({ eventType })}>
            {/* Image Container with Badge */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg">
                <ImageKit
                    src={ikUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                />
                {/* Badge Overlay */}
                <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        eventType === "Online"
                            ? "bg-blue-600"
                            : "bg-green-600"
                    }`}
                >
                    {eventType === "Online"
                        ? trans("common.online")
                        : trans("common.inPlace")}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col gap-4 flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
                    {desc}
                </p>

                {/* Info Lines */}
                <div className="flex flex-col gap-2">
                    {/* Date/Time */}
                    <IconLabel
                        icon={FaCalendarDays}
                        label={formatDateForDisplay(date)}
                        variant="primary"
                    />

                    {/* Location/Platform */}
                    <IconLabel
                        icon={FaLocationDot}
                        label={getLocationText()}
                        variant="primary"
                    />

                    {/* Spots Available (optional) */}
                    {spotsAvailable !== undefined && (
                        <IconLabel
                            icon={FaUsers}
                            label={formatLocaleString(
                                trans("common.spotsAvailable"),
                                spotsAvailable.toString()
                            )}
                            variant="primary"
                        />
                    )}
                </div>

                {/* Register Now Button */}
                <div className="mt-2">
                    <Button
                        label={trans("common.registerNow")}
                        variant="primary"
                        link={href}
                        className="w-full bg-orange-500 hover:bg-orange-600"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventCard;

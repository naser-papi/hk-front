"use server";
import { cva, VariantProps } from "class-variance-authority";
import trans from "@/helpers/i18n/server";
import { BaseHTMLAttributes } from "react";
import { FaCalendarDays, FaLocationDot, FaUsers } from "react-icons/fa6";
import { Button, IconLabel, ImageKit } from "@/components/atom";
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
            verticalLayout: {
                true: ["md:flex-col"],
                false: ["md:flex-row"],
            },
        },
    }
);

const imageContainerVariants = cva(["relative", "min-h-[360px]", "w-full"], {
    variants: {
        verticalLayout: {
            true: ["md:w-full"],
            false: ["md:w-1/2"],
        },
    },
});

const contentVariants = cva(
    ["flex", "flex-col", "justify-between", "p-6", "gap-4", "w-full"],
    {
        variants: {
            verticalLayout: {
                true: ["md:w-full"],
                false: ["md:w-1/2"],
            },
        },
    }
);

const titleVariants = cva([
    "text-xl",
    "font-bold",
    "text-gray-900",
    "line-clamp-2",
]);

const descriptionVariants = cva(["text-gray-600", "text-sm", "line-clamp-2"]);

interface EventCardProps
    extends
        BaseHTMLAttributes<HTMLDivElement>,
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
    verticalLayout?: boolean;
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
    verticalLayout,
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
        <div className={cardVariants({ eventType, verticalLayout })}>
            {/* Image Container with Badge */}
            <div className={imageContainerVariants({ verticalLayout })}>
                <ImageKit
                    src={ikUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
                {/* Badge Overlay */}
                <div
                    className={`absolute right-3 top-3 rounded-full px-3 py-1 text-sm font-semibold text-white ${
                        eventType === "Online" ? "bg-blue-600" : "bg-green-600"
                    }`}
                >
                    {eventType === "Online"
                        ? trans("common.online")
                        : trans("common.inPlace")}
                </div>
            </div>

            {/* Content Section */}
            <div className={contentVariants({ verticalLayout })}>
                <div className="flex flex-col gap-3">
                    {/* Title */}
                    <h3 className={titleVariants()}>{title}</h3>

                    {/* Description */}
                    <p className={descriptionVariants()}>{desc}</p>

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
                </div>

                {/* Register Now Button */}
                <Button
                    label={trans("common.registerNow")}
                    variant="primary"
                    link={href}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                />
            </div>
        </div>
    );
};

export default EventCard;

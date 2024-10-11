import { cva, VariantProps } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import { cookies } from "next/headers";
import { BaseHTMLAttributes } from "react";
import { faCalendarDays } from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { faMessage } from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { IconLabel, LinkButton } from "@/components";
import { formatEventDate, useTranslation } from "@/helpers";
import { i18nCookieName } from "@/constants/locale";
import "./event-card.css";
const variants = cva([
    "event-card",
    "min-w-[300px]",
    "pr-[100px]",
    "grid",
    "relative",
    "[&>img]:z-0",
]);

const infoVariants = cva([
    "grid",
    "gap-y-3",
    "text-primary",
    "text-lg",
    "font-semibold",
    "p-3",
    "z-10",
    "[&>h4]:row-container",
    "w-full",
    "h-full",
    "bg-white",
]);

interface EventCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    image: StaticImageData;
    desc: string;
    date: Date;
    commentsCount: number;
    href: string;
}

const EventCard = ({
    image,
    desc,
    date,
    commentsCount,
    href,
}: EventCardProps) => {
    const cookieStore = cookies();
    const locale = cookieStore.get(i18nCookieName as any);
    const { t } = useTranslation(locale?.value!);
    return (
        <div className={variants({})}>
            <Image src={image} alt={"event"} fill />
            <section className={infoVariants({})}>
                <h4>
                    <IconLabel
                        icon={faCalendarDays}
                        label={formatEventDate(date)}
                    />
                    <IconLabel icon={faMessage} label={commentsCount} />
                </h4>
                <p>{desc}</p>
                <LinkButton label={t("common.detailDot")} href={href} />
            </section>
        </div>
    );
};

export default EventCard;

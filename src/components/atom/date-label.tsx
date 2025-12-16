import { BaseHTMLAttributes } from "react";
import { IconLabel } from "@/components/atom";
import { FaCalendarDays } from "react-icons/fa6";
import { formatPublishDateString } from "@/helpers";

interface DateLabelProps extends BaseHTMLAttributes<HTMLLabelElement> {
    date?: string;
    variant?: "primary" | "secondary" | "tertiary";
}

const DateLabel = ({
    date,
    variant = "primary",
    className,
    ...rest
}: DateLabelProps) => {
    if (!date) return null;

    const formattedDate = formatPublishDateString(date);

    return (
        <IconLabel
            icon={FaCalendarDays}
            label={formattedDate}
            variant={variant}
            className={className}
            {...rest}
        />
    );
};

export default DateLabel;


import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { twMerge } from "tailwind-merge";

// Define the ButtonList container component
interface ButtonListProps {
    children: ReactNode;
    className?: string;
}

const ButtonList = ({ children, className }: ButtonListProps) => {
    return (
        <div
            className={twMerge(
                "button-list w-full overflow-x-auto whitespace-nowrap",
                "hide-scrollbar",
                className
            )}
        >
            <div className="flex items-center gap-0">{children}</div>
        </div>
    );
};

// Define the ButtonList.Button sub-component
interface ButtonProps {
    text: string;
    icon?: IconDefinition;
    onClick?: () => void;
    className?: string;
    isSelected?: boolean;
}

const Button = ({
    text,
    icon,
    onClick,
    className,
    isSelected,
}: ButtonProps) => {
    return (
        <button
            className={twMerge(
                "border border-light bg-primaryLight px-4 py-2 text-sm font-medium text-white hover:bg-secondary",
                "flex flex-1 shrink-0 items-center gap-2",
                isSelected ? "bg-primary" : "",
                className
            )}
            onClick={onClick}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            <span>{text}</span>
        </button>
    );
};

// Attach Button as a static property of ButtonList
ButtonList.Button = Button;

export default ButtonList;

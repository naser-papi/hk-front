"use client";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

const textboxVariants = cva(
    [
        "hk-text-box",
        "flex",
        "items-center",
        "text-primary",
        "border",
        "border-altLight",
        "bg-white",
        "p-2",
        "rounded-lg",
        "[&>.text]:w-full",
        "[&>.text]:outline-none",
        "[&>.text]:bg-transparent",
        "[&>svg]:mr-2",
        "gap-2",
    ],
    {
        variants: {
            intend: {
                primary: [],
                secondary: [],
            },
        },
    }
);

interface TextBoxProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof textboxVariants> {
    type: "text" | "textarea" | "password";
    updateDto?: (name: string, value: any) => void;
    rows?: number;
    icon?: IconType;
    onEnterKeyPressed?: (text: string) => void;
}

const TextBox = ({
    intend,
    type,
    updateDto,
    name,
    value,
    rows,
    icon,
    className,
    onEnterKeyPressed,
    ...rest
}: TextBoxProps) => {
    const [text, setText] = useState(value);
    return (
        <div className={twMerge(textboxVariants({ intend }), className)}>
            {icon && (() => {
                const Icon = icon;
                return <Icon />;
            })()}
            {type === "textarea" ? (
                <textarea
                    readOnly={rest.readOnly}
                    className={"text"}
                    onKeyDown={(event) =>
                        onEnterKeyPressed &&
                        event.key === "Enter" &&
                        onEnterKeyPressed(text as string)
                    }
                    onChange={(event) =>
                        updateDto
                            ? updateDto(event.target.name, event.target.value)
                            : setText(event.target.value)
                    }
                    value={updateDto ? value : text}
                    name={name}
                    placeholder={rest.placeholder}
                    rows={rows}
                ></textarea>
            ) : (
                <input
                    {...rest}
                    className={"text"}
                    value={updateDto ? value : text}
                    name={name}
                    type={type}
                    onKeyDown={(event) =>
                        onEnterKeyPressed &&
                        event.key === "Enter" &&
                        onEnterKeyPressed(text as string)
                    }
                    onChange={(event) =>
                        updateDto
                            ? updateDto(event.target.name, event.target.value)
                            : setText(event.target.value)
                    }
                />
            )}
        </div>
    );
};

export default TextBox;

"use client";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, useState } from "react";
import { IconType } from "react-icons";
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

const textboxVariants = cva(
    [
        "hk-text-box",
        "flex",
        "items-center",
        "text-black",
        "border-2",
        "border-gray-700",
        "p-2",
        "rounded-lg",
        "[&>.text]:w-full",
        "[&>.text]:outline-none",
        "[&>.text]:bg-transparent",
        "[&>.text]:text-gray-900",
        "[&>svg]:me-2",
        "gap-2",
        "focus-within:outline-2",
        "focus-within:outline-offset-2",
        "focus-within:outline-border-focus",
    ],
    {
        variants: {
            variant: {
                primary: [],
                secondary: [],
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

interface TextBoxProps
    extends
        InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof textboxVariants> {
    type: "text" | "textarea" | "password";
    updateDto?: (name: string, value: any) => void;
    rows?: number;
    icon?: IconType;
    onEnterKeyPressed?: (text: string) => void;
    clearable?: boolean;
}

const TextBox = ({
    variant,
    type,
    updateDto,
    name,
    value,
    rows,
    icon,
    className,
    onEnterKeyPressed,
    clearable,
    ...rest
}: TextBoxProps) => {
    const [text, setText] = useState(value);
    const currentValue = updateDto ? value : text;
    const canClear =
        !!clearable &&
        currentValue !== undefined &&
        currentValue !== null &&
        String(currentValue).length > 0;
    return (
        <div className={twMerge(textboxVariants({ variant }), className)}>
            {icon &&
                (() => {
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
                    value={currentValue}
                    name={name}
                    placeholder={rest.placeholder}
                    rows={rows}
                ></textarea>
            ) : (
                <input
                    {...rest}
                    className={"text"}
                    value={currentValue}
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
            {canClear && (
                <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Clear"
                    onClick={() => {
                        if (updateDto && name) {
                            updateDto(name, "");
                            return;
                        }
                        setText("");
                        if (onEnterKeyPressed) {
                            onEnterKeyPressed("");
                        }
                    }}
                >
                    <RxCross2 />
                </button>
            )}
        </div>
    );
};

export default TextBox;

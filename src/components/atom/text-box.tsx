"use client";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const textboxVariants = cva(
    [
        "hk-text-box",
        "flex",
        "items-center",
        "text-black",
        "border-2",
        "border-cyan",
        "p-2",
        "rounded-lg",
        "[&>.text]:outline-none",
        "[&>.text]:bg-transparent",
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
}

const TextBox = ({
    intend,
    type,
    updateDto,
    name,
    value,
    rows,
    ...rest
}: TextBoxProps) => {
    return (
        <div className={textboxVariants({ intend })}>
            {type === "textarea" ? (
                <textarea
                    className={"text"}
                    onChange={(event) =>
                        updateDto &&
                        updateDto(event.target.name, event.target.value)
                    }
                    value={value}
                    name={name}
                    placeholder={rest.placeholder}
                    rows={rows}
                ></textarea>
            ) : (
                <input
                    {...rest}
                    className={"text"}
                    value={value}
                    name={name}
                    type={type}
                    onChange={(event) =>
                        updateDto &&
                        updateDto(event.target.name, event.target.value)
                    }
                />
            )}
        </div>
    );
};

export default TextBox;

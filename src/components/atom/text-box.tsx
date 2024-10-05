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
        "[&>input]:outline-none",
        "[&>input]:bg-transparent",
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
}

const TextBox = ({ intend, type, ...rest }: TextBoxProps) => {
    return (
        <div className={textboxVariants({ intend })}>
            <input {...rest} type={type} />
        </div>
    );
};

export default TextBox;

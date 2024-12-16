"use client";
import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";

const alertVariants = cva(
    ["p-4", "rounded", "text-label", "min-w-[300px]", "text-center"],
    {
        variants: {
            variant: {
                success: ["bg-white", "text-primary"],
                info: ["bg-primary", "text-white"],
                warn: ["bg-warning", "text-black"],
                error: ["bg-secondary", "text-primary"],
            },
            closable: {
                true: [
                    "relative",
                    "flex",
                    "items-center",
                    "justify-between",
                    "gap-6",
                ],
                false: [],
            },
        },
        defaultVariants: {
            variant: "info",
        },
    }
);

interface AlertProps extends VariantProps<typeof alertVariants> {
    message: string;
    closable?: boolean;
}

const Alert = ({ variant, message, closable = false }: AlertProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!closable) {
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [closable]);

    if (!visible) return null;

    return (
        <div className={alertVariants({ variant, closable })}>
            {message}
            {closable && <button onClick={() => setVisible(false)}>X</button>}
        </div>
    );
};

export default Alert;

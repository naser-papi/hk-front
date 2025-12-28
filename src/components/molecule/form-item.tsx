import { twMerge } from "tailwind-merge";

interface FormItemProps {
    label: string;
    children: React.ReactNode;
    className?: string;
}

const FormItem = ({ label, children, className }: FormItemProps) => {
    return (
        <div className={twMerge("w-full", className)}>
            <label
                className={
                    "mb-2 inline-block px-3 py-1 rounded-md font-normal text-sm text-[var(--black-light)]"
                }
                style={{
                    background: "linear-gradient(to top, var(--primary) 0%, var(--primary-light) 35%, transparent 65%)",
                }}
            >
                {`${label}:`}
            </label>
            {children}
        </div>
    );
};

export default FormItem;

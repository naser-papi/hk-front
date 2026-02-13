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
                    "mb-2 inline-block rounded-md bg-secondary-lighter px-3 py-1 text-sm font-normal text-[var(--black-light)]"
                }
            >
                {`${label}:`}
            </label>
            {children}
        </div>
    );
};

export default FormItem;

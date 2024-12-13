interface FormItemProps {
    label: string;
    children: React.ReactNode;
}

const FormItem = ({ label, children }: FormItemProps) => {
    return (
        <div className={"flex w-full flex-col gap-2"}>
            <label className={"text-black"}>{label}</label>
            {children}
        </div>
    );
};

export default FormItem;

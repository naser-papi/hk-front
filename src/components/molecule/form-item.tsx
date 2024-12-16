interface FormItemProps {
    label: string;
    children: React.ReactNode;
}

const FormItem = ({ label, children }: FormItemProps) => {
    return (
        <div className={"w-full"}>
            <label className={"mb-2 inline-block bg-gray-50/50 text-black"}>
                {`${label}:`}
            </label>
            {children}
        </div>
    );
};

export default FormItem;

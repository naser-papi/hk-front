interface AsideRotatorProps {
    children: JSX.Element;
    rotate:
        | "rotate-45"
        | "rotate-90"
        | "rotate-135"
        | "rotate-180"
        | "-rotate-45"
        | "-rotate-90"
        | "-rotate-180";
}

const AsideRotator = ({ children, rotate }: AsideRotatorProps) => {
    return (
        <aside
            className={`absolute inset-inline-start-0 top-0 z-50 -translate-x-5 rtl:translate-x-5 translate-y-[10px] px-4 text-secondary ${rotate}`}
        >
            {children}
        </aside>
    );
};

export default AsideRotator;

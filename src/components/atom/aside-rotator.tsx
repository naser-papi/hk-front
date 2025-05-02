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
            className={`absolute left-0 top-0 z-50 translate-x-[-20px] translate-y-[10px] px-4 text-secondary ${rotate}`}
        >
            {children}
        </aside>
    );
};

export default AsideRotator;

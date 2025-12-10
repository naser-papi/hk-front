interface InfoBoxProps {
    label: string;
    text: string;
}

const InfoBox = ({ label, text }: InfoBoxProps) => {
    return (
        <figure
            className={`info-box flex w-[160px] shrink-0 flex-col gap-1 rounded-xl border-2 border-white bg-[#ffffff99] px-4 py-2`}
        >
            <figcaption className={"text-sm text-secondary"}>
                {label}
            </figcaption>
            <strong className={"text-normal text-primary"}>{text}</strong>
        </figure>
    );
};

export default InfoBox;

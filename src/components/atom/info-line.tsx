import React from "react";

interface InfoBoxProps {
    text: string;
    label: string;
}

const InfoLine = ({ text, label }: InfoBoxProps) => {
    return (
        <figure
            className={
                "bg-light rounded-br-2xl rounded-tl-2xl p-2 text-base font-medium leading-tight text-primary"
            }
        >
            <span className={"pe-1 text-secondary"}>{`${label}: `}</span>
            <strong>{text}</strong>
        </figure>
    );
};

export default InfoLine;

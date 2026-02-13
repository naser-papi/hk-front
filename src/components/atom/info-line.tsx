import React from "react";

interface InfoBoxProps {
    text: string;
    label: string;
}

const InfoLine = ({ text, label }: InfoBoxProps) => {
    return (
        <figure
            className={
                "rounded-br-xl rounded-tl-xl bg-secondary px-3 py-2 text-base font-medium leading-tight text-primary"
            }
        >
            <span
                className={"pe-1 text-secondary-lighter"}
            >{`${label}: `}</span>
            <strong>{text}</strong>
        </figure>
    );
};

export default InfoLine;

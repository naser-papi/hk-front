import { LabelValue } from "@/types/base";
import { InfoLine } from "../atom";

interface DetailContentHeaderProps {
    title: string;
    meta: LabelValue[];
}
const DetailContentHeader = ({ title, meta }: DetailContentHeaderProps) => {
    const cards = meta
        ?.filter((meta) => meta.meta == undefined || !meta.meta.hide)
        .map((item, index) => (
            <InfoLine
                key={index}
                label={item.label}
                text={item.value.toString()}
            />
        ));
    return (<header className="pb-4 border-b border-gray-600 w-full flex flex-col flex-start">
        <h1 className="text-4xl font-bold">{title}</h1>
        {cards && cards.length && (
            <article className={"carousel-container justify-stretch"}>
                {cards}
            </article>
        )}
    </header>);
};

export default DetailContentHeader;
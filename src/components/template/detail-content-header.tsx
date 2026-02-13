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
    return (
        <header className="flex-start flex w-full flex-col gap-8 border-b border-gray-600 pb-4">
            <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
            {cards && cards.length && (
                <article
                    className={
                        "flex max-w-sm flex-wrap items-center gap-4 sm:max-w-lg md:max-w-none"
                    }
                >
                    {cards}
                </article>
            )}
        </header>
    );
};

export default DetailContentHeader;

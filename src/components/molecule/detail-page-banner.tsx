import { LabelValue } from "@/types/base";
import { ImagesCarousel } from "@/components/molecule/index";
import { InfoLine } from "@/components/atom";

interface DetailPageBannerProps {
    title: string;
    images: string[];
    shortDesc?: string;
    meta?: LabelValue[];
}

const DetailPageBanner = ({
    title,
    images,
    meta,
    shortDesc,
}: DetailPageBannerProps) => {
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
        <div className={"detail-page-banner grid w-full gap-y-5"}>
            <h1 className={"text-alt-heading"}>{title}</h1>
            <ImagesCarousel images={images} />
            {shortDesc && <h2 className={"text-alt-title"}>{shortDesc}</h2>}
            {cards && cards.length && (
                <article className={"carousel-container justify-stretch"}>
                    {cards}
                </article>
            )}
        </div>
    );
};

export default DetailPageBanner;

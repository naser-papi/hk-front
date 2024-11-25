import { LabelValue } from "@/types/base";
import { ImagesCarousel } from "@/components/molecule/index";
import { InfoBox } from "@/components/atom";

interface DetailPageBannerProps {
    title: string;
    images: string[];
    meta: LabelValue[];
}

const DetailPageBanner = ({ title, images, meta }: DetailPageBannerProps) => {
    const cards = meta.map((item, index) => (
        <InfoBox key={index} label={item.label} text={item.value.toString()} />
    ));
    return (
        <div className={"detail-page-banner grid w-full gap-y-5"}>
            <h1 className={"text-alt-heading"}>{title}</h1>
            <ImagesCarousel images={images} />
            <article className={"carousel-container justify-stretch"}>
                {cards}
            </article>
        </div>
    );
};

export default DetailPageBanner;

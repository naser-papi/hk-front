import { ImageKit, LinkButton } from "@/components/atom";
import trans from "@/helpers/i18n/server";

interface BannerCardProps {
    title: string;
    desc: string;
    image: string;
    detailLink: string;
}

const BannerCard = ({ title, desc, image, detailLink }: BannerCardProps) => {
    return (
        <div
            className={
                "banner-card card flex h-[500px] flex-col gap-3 rounded-lg border-2 border-altLight p-2 text-white md:h-[780px]"
            }
        >
            <ImageKit
                src={image}
                alt={title}
                width={290}
                height={260}
                className={
                    "banner-card-image h-[240px] w-full rounded-lg object-cover md:h-[480px] lg:h-[520px]"
                }
            />
            <h1 className={"text-4xl font-bold"}>{title}</h1>
            <p className={"text-lg"}>{desc}</p>
            <LinkButton
                label={trans("common.readMore")}
                href={detailLink}
                variant={"secondary"}
                className={"mt-auto"}
            />
        </div>
    );
};

export default BannerCard;

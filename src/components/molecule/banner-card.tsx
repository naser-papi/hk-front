import { ImageKit, LinkButton } from "@/components";
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
                "banner-card rounded-lg border-2 border-altLight p-2 text-white"
            }
        >
            <ImageKit
                src={image}
                alt={title}
                width={290}
                height={260}
                className={
                    "banner-card-image w-full rounded-lg object-cover lg:h-[520px]"
                }
            />
            <h1 className={"text-4xl font-bold"}>{title}</h1>
            <p className={"mt-5 text-lg"}>{desc}</p>
            <div className={"mt-5 flex items-center"}>
                <LinkButton
                    label={trans("common.readMore")}
                    href={detailLink}
                    intend={"secondary"}
                />
            </div>
        </div>
    );
};

export default BannerCard;

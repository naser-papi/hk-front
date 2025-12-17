import { ImageKit, LinkButton } from "@/components/atom";
import trans from "@/helpers/i18n/server";

interface HeroBannerCardProps {
    title: string;
    desc: string;
    image: string;
    detailLink: string;
}

const HeroBannerCard = ({ title, desc, image, detailLink }: HeroBannerCardProps) => {
    return (
        <div
            className={
                "hero-banner-card card relative flex min-h-[500px] w-full flex-col items-start justify-end overflow-hidden md:min-h-[600px] lg:min-h-[700px]"
            }
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <ImageKit
                    src={image}
                    alt={title}
                    width={1920}
                    height={1080}
                    priority
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex w-full  flex-col items-start gap-6 px-4 pb-12 text-start text-white bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.6)] to-transparent md:gap-8 md:px-8 md:pb-16">
                {/* Title */}
                <h1 className="text-3xl font-bold leading-tight drop-shadow-lg md:text-5xl lg:text-6xl">
                    {title}
                </h1>

                {/* Description */}
                <p className="max-w-2xl text-lg leading-relaxed drop-shadow-md md:text-xl lg:text-2xl">
                    {desc}
                </p>

                {/* CTA Button */}
                <div className="mt-4">
                    <LinkButton
                        label={trans("common.readMore")}
                        href={detailLink}
                        variant={"secondary"}
                        className="text-lg px-8 py-4 shadow-lg transition-transform hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroBannerCard;

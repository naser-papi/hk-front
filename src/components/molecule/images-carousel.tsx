import { NoData } from "@/components/molecule";
import { ImageKit } from "@/components/atom";
import BulletCarouselContainer from "@/components/molecule/bullet-carousel-container";

interface ImagesCarouselProps {
    images: string[];
}

const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
    if (!images || !images.length) return <NoData />;
    const cards = images.map((image, index) => (
        <div
            className={
                "card images-carousel relative min-h-[260px] min-w-[320px]"
            }
            key={index}
        >
            <ImageKit src={image} alt={"image"} fill className={"object-fit"} />
        </div>
    ));
    return <BulletCarouselContainer>{cards}</BulletCarouselContainer>;
};

export default ImagesCarousel;

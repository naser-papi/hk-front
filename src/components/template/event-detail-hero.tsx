import { GetEventDetail } from "@/services/events";
import { ImagesCarousel, NoData } from "@/components/molecule";

const EventDetailHero = async () => {
    const info = await GetEventDetail();
    if (!info) return <NoData />;
    const imgUrls = info.bannerMedia[0]?.url;
    return (
        <section
            id={"blog-detail-hero"}
            className={
                "template bg-primary !p-0 [&_.images-carousel]:aspect-video [&_.images-carousel]:min-w-full"
            }
        >
            <ImagesCarousel images={[imgUrls]} />
        </section>
    );
};

export default EventDetailHero;

import { GetServiceDetail } from "@/services/services";
import { ImagesCarousel, NoData } from "@/components/molecule";

const ServiceDetailHero = async () => {
    const info = await GetServiceDetail();
    if (!info) return <NoData />;
    const imgUrls = info.bannerMedia?.url;
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

export default ServiceDetailHero;

import {
    HeroBannerCard,
    BulletCarouselContainer,
    NoData,
} from "@/components/molecule";
import { GetHeroBanners } from "@/services/banners";

const LandingBannerCarousel = async () => {
    try {
        const banners = await GetHeroBanners();
        
        if (!banners || !banners.length) {
            return <NoData />;
        }

        const heroSlides = banners.flatMap((banner) => {
            const result = [];
            if (banner.blogs && banner.blogs.bannerMedia) {
                result.push(
                    <HeroBannerCard
                        title={banner.blogs.title}
                        desc={banner.blogs.shortDesc}
                        image={banner.blogs.bannerMedia.url}
                        detailLink={`/blogs/${banner.blogs.documentId}`}
                        key={banner.blogs.documentId}
                    />
                );
            }
            if (banner.link && banner.link.bannerMedia) {
                result.push(
                    <HeroBannerCard
                        title={banner.link.title}
                        desc={banner.link.shortDesc}
                        image={banner.link.bannerMedia.url}
                        detailLink={banner.link.detailLink}
                        key={banner.link.documentId}
                    />
                );
            }
            if (banner.event && banner.event.bannerMedia) {
                result.push(
                    <HeroBannerCard
                        title={banner.event.title}
                        desc={banner.event.shortDesc}
                        image={banner.event.bannerMedia[0].url}
                        detailLink={`/events/${banner.event.detailLink}`}
                        key={banner.event.documentId}
                    />
                );
            }
            if (banner.service && banner.service.bannerMedia) {
                result.push(
                    <HeroBannerCard
                        title={banner.service.title}
                        desc={banner.service.shortDesc}
                        image={banner.service.bannerMedia.url}
                        detailLink={`/services/${banner.service.documentId}`}
                        key={banner.service.documentId}
                    />
                );
            }
            return result;
        });

        if (!heroSlides || heroSlides.length === 0) {
            return <NoData />;
        }

        return <BulletCarouselContainer variant="hero">{heroSlides}</BulletCarouselContainer>;
    } catch (error) {
        // Log error for debugging (in production, you might want to send to error tracking service)
        console.error("Error fetching hero banners:", error);
        return <NoData />;
    }
};

export default LandingBannerCarousel;

import { GetHeroBanners } from "@/services/banners";
import Container from "./container";
import BannerCard from "@/components/molecule/banner-card";

const BannerCarousel = async () => {
    const banners = await GetHeroBanners();
    const images = banners.flatMap((banner) => {
        const result = [];
        if (banner.blogs && banner.blogs.bannerMedia) {
            result.push(
                <BannerCard
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
                <BannerCard
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
                <BannerCard
                    title={banner.event.title}
                    desc={banner.event.shortDesc}
                    image={banner.event.bannerMedia.url}
                    detailLink={banner.event.detailLink}
                    key={banner.event.documentId}
                />
            );
        }
        if (banner.service && banner.service.bannerMedia) {
            result.push(
                <BannerCard
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
    return <Container>{images}</Container>;
};

export default BannerCarousel;

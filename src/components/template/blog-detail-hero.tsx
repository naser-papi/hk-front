import { ImagesCarousel, NoData } from "@/components/molecule";
import { GetBlogDetail } from "@/services/blogs";

const BlogDetailHero = async() => {
    const info = await GetBlogDetail();
    if (!info) return <NoData />;
    const imgUrls = info.bannerMedia?.url
    return (
        <section
            id={"blog-detail-hero"}
            className={
                "template bg-primary !p-0 [&_.images-carousel]:min-w-full [&_.images-carousel]:aspect-video"
            }
        >           
            <ImagesCarousel images={[imgUrls]} />
        </section>
    );
};

export default BlogDetailHero;

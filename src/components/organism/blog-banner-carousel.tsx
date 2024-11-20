import { GetTopBlogs } from "@/services/blogs";
import { NoData } from "@/components/organism";
import { BlogDto } from "@/types/dto";
import { BlogBannerCard } from "@/components/molecule";
import { getNavDirection } from "@/helpers";

const BlogBannerCarousel = async () => {
    const list = await GetTopBlogs();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: BlogDto, index) => (
        <BlogBannerCard
            key={item.documentId}
            title={item.title}
            ikUrl={item.bannerMedia.url}
            shortDesc={item.shortDesc}
            link={`/blogs/${item.documentId}`}
            navDirection={getNavDirection(list.length, index)}
        />
    ));
    return (
        <div
            className={
                "hidden-scroll flex max-w-5xl items-stretch gap-3 overflow-x-auto [&>.blog-banner-card]:w-[min(100%-64px,620px)] [&>.blog-banner-card]:shrink-0"
            }
        >
            {cards}
        </div>
    );
};

export default BlogBannerCarousel;

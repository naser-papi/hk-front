import { GetTopBlogs } from "@/services/blogs";
import { BlogDto } from "@/types/dto";
import { BlogBannerCard, NoData } from "@/components/molecule";
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
    return <article className={"carousel-container"}>{cards}</article>;
};

export default BlogBannerCarousel;

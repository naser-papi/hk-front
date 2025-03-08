import { BlogDto } from "@/types/dto";
import { ListBannerCard, NoData } from "@/components/molecule";
import { getNavDirection } from "@/helpers";
import { GetTopBlogs } from "@/services/blogs";

const BlogBannerCarousel = async () => {
    const list = await GetTopBlogs();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: BlogDto, index) => (
        <ListBannerCard
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

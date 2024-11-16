import { GetBlogList } from "@/services/blogs";
import { NoData } from "@/components/organism";
import { BlogDto } from "@/types/dto";
import { BlogBannerCard } from "@/components";
import { getNavDirection } from "@/helpers";

const BlogBannerCarousel = async () => {
    const list = await GetBlogList();
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
    return <div className={"gap2 flex max-w-full items-center"}>{cards}</div>;
};

export default BlogBannerCarousel;

import { BlogDto } from "@/types/dto";
import { KnowledgeCard } from "../molecule";
import { GetTopBlogs } from "@/services/blogs";
import NoData from "@/components/organism/no-data";

const BlogCardContainer = async () => {
    const list = await GetTopBlogs();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: BlogDto) => (
        <KnowledgeCard
            key={item.id}
            ikUrl={item.cardImage.url}
            title={item.title}
            description={item.shortDesc}
            href={`/blogs/${item.documentId}`}
        />
    ));
    return (
        <article
            className={"blog-card-container grid place-items-center gap-y-8"}
        >
            {cards}
        </article>
    );
};

export default BlogCardContainer;

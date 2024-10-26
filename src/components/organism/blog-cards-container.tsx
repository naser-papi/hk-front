import { BlogDto } from "@/types/dto";
import { KnowledgeCard } from "../molecule";
import { GetTopBlogs } from "@/services/blogs";

const BlogCardContainer = async () => {
    const list = await GetTopBlogs();
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
        <article className={"grid place-items-center gap-y-8"}>{cards}</article>
    );
};

export default BlogCardContainer;

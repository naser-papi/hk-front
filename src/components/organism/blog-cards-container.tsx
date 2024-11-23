import { BlogDto } from "@/types/dto";
import { KnowledgeCard } from "../molecule";
import { GetTopBlogs } from "@/services/blogs";
import { Container, NoData } from "@/components/molecule";

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
        <Container
            direction={"column"}
            gap={"big"}
            className={"w-full @container"}
        >
            {cards}
        </Container>
    );
};

export default BlogCardContainer;

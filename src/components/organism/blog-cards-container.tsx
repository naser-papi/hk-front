import HomePageStore, { CacheKeys } from "@/services/home-page-store";
import { BlogDto } from "@/types/dto";
import { Container, NoData } from "@/components/molecule";
import { KnowledgeCard } from "../molecule";

const BlogCardContainer = async () => {
    const list = (await HomePageStore.getInstance().getValue(
        CacheKeys.topBlogs
    )) as BlogDto[];
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

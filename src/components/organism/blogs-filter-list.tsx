import { GetBlogList } from "@/services/blogs";
import { NoData } from "@/components/organism";
import { BlogDto } from "@/types/dto";
import { Container, KnowledgeCard } from "@/components/molecule";
import FilterListContainer from "./filter-list-container";

const BlogsFilterList = async () => {
    const list = await GetBlogList();
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
        <FilterListContainer list={list} route={"/blogs"}>
            <Container direction={"column"} gap={"medium"}>
                {cards}
            </Container>
        </FilterListContainer>
    );
};

export default BlogsFilterList;

import { getBlogsUnionCategories, GetFilteredBlogList } from "@/services/blogs";
import { BlogDto } from "@/types/dto";
import { Container, KnowledgeCard, NoData } from "@/components/molecule";
import FilterListContainer from "./filter-list-container";

const BlogsFilterList = async () => {
    const list = await GetFilteredBlogList();
    const catList = await getBlogsUnionCategories();
    const noData = !list || !list.length;
    const cards = noData ? (
        <NoData />
    ) : (
        list?.map((item: BlogDto) => (
            <KnowledgeCard
                key={item.id}
                ikUrl={item.cardImage.url}
                title={item.title}
                description={item.shortDesc}
                href={`/blogs/${item.documentId}`}
            />
        ))
    );
    return (
        <FilterListContainer catList={catList} route={"/blogs"}>
            <Container
                layout="grid"
                columns={2}
                gap={"big"}
                className={"@container"}
            >
                {cards}
            </Container>
        </FilterListContainer>
    );
};

export default BlogsFilterList;

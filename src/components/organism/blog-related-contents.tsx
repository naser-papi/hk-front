import { Container, KnowledgeCard, NoData } from "@/components/molecule";
import { GetRelatedBlogs } from "@/services/blogs";
import { BlogDto } from "@/types/dto";
import trans from "@/helpers/i18n/server";

const BlogRelatedContents = async () => {
    const list = await GetRelatedBlogs();

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
        <div className={"related-contents"}>
            <h2>{trans("common.relatedContents")}</h2>
            <Container
                direction={"row"}
                gap={"normal"}
                className={"w-full @container"}
            >
                {cards}
            </Container>
        </div>
    );
};

export default BlogRelatedContents;

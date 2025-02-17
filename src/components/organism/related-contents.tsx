"use server";
import { Container, NoData, RelatedCard } from "@/components/molecule";
import trans from "@/helpers/i18n/server";
import { GetRelatedContents } from "@/services/common";
import { RelatedContentDto } from "@/types/dto/common";

interface RelatedContentsProps {
    contentType: "blogs" | "events" | "services";
}

const RelatedContents = async ({ contentType }: RelatedContentsProps) => {
    const list = await GetRelatedContents();

    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: RelatedContentDto) => (
        <RelatedCard
            key={item.documentId}
            ikUrl={item.cardImage.url}
            title={item.title}
            description={item.shortDesc}
            href={`/${contentType}/${item.documentId}`}
        />
    ));
    return (
        <>
            <h2 className={"mb-4 text-3xl font-semibold"}>
                {trans("common.relatedContents")}
            </h2>
            <Container
                direction={"row"}
                gap={"normal"}
                className={"w-full items-stretch @container"}
            >
                {cards}
            </Container>
        </>
    );
};

export default RelatedContents;

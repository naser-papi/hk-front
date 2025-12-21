import { ExternalLink, NoData, Container } from "@/components/molecule";
import { LinkDto } from "@/types/dto";
import { GetTopLinks } from "@/services/external-links";

const LinkCardsContainer = async () => {
    const list = await GetTopLinks();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: LinkDto) => (
        <ExternalLink
            key={item.id}
            title={item.title}
            description={item.shortDesc}
            href={item.detailLink}
        />
    ));
    return (
        <Container
            direction={"column"}
            gap={"big"}
            className={"w-full @container lg:grid lg:grid-cols-3 gap-y-8"}
        >
            {cards}
        </Container>
    );
};

export default LinkCardsContainer;

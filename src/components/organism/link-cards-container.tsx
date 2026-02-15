import { Container, ExternalLink, NoData } from "@/components/molecule";
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
            direction={"row"}
            gap={"big"}
            className={"w-full gap-y-8 @container lg:grid lg:grid-cols-3"}
        >
            {cards}
        </Container>
    );
};

export default LinkCardsContainer;

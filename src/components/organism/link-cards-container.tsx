import { Container, ExternalLink, NoData } from "@/components/molecule";
import { LinkDto } from "@/types/dto";
import { GetLinksList } from "@/services/external-links";

const LinkCardsContainer = async () => {
    const list = await GetLinksList();
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
            layout={"carousel"}
            direction={"row"}
            gap={"big"}
            className={"w-ful @container"}
        >
            {cards}
        </Container>
    );
};

export default LinkCardsContainer;

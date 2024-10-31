import { GetTopLinks } from "@/services/external-links";
import { ExternalLink } from "@/components/molecule";
import { LinkDto } from "@/types/dto";
import NoData from "@/components/organism/no-data";

const LinkCardsContainer = async () => {
    const list = await GetTopLinks();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: LinkDto) => (
        <ExternalLink
            key={item.id}
            logo={item.icon.url}
            title={item.title}
            href={item.detailLink}
        />
    ));
    return (
        <article
            className={"link-cards-container grid place-items-center gap-y-8"}
        >
            {cards}
        </article>
    );
};

export default LinkCardsContainer;

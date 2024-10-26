import { GetTopLinks } from "@/services/external-links";
import { ExternalLink } from "@/components/molecule";
import { LinkDto } from "@/types/dto";

const LinkCardsContainer = async () => {
    const list = await GetTopLinks();
    const cards = list.map((item: LinkDto) => (
        <ExternalLink
            key={item.id}
            logo={item.icon.url}
            title={item.title}
            href={item.detailLink}
        />
    ));
    return (
        <article className={"grid place-items-center gap-y-8"}>{cards}</article>
    );
};

export default LinkCardsContainer;

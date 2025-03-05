import HomePageStore, { CacheKeys } from "@/services/home-page-store";
import { ExternalLink, NoData } from "@/components/molecule";
import { LinkDto } from "@/types/dto";

const LinkCardsContainer = async () => {
    const list = (await HomePageStore.getInstance().getValue(
        CacheKeys.topLinks
    )) as LinkDto[];
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
            className={
                "link-cards-container grid w-full place-items-center gap-y-8 @container"
            }
        >
            {cards}
        </article>
    );
};

export default LinkCardsContainer;

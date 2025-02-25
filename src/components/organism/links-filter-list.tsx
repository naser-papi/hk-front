import { GetLinksList } from "@/services/external-links";
import { Container, ExternalLink, NoData } from "@/components/molecule";
import { LinkDto } from "@/types/dto";
import FilterListContainer from "@/components/organism/filter-list-container";

const LinksFilterList = async () => {
    const list = await GetLinksList();
    const noData = !list || !list.length;
    const cards = noData ? (
        <NoData />
    ) : (
        list?.map((item: LinkDto) => (
            <ExternalLink
                key={item.id}
                logo={item.icon.url}
                title={item.title}
                href={item.detailLink}
            />
        ))
    );
    return (
        <FilterListContainer list={list} route={"/links"}>
            <Container
                direction={"column"}
                gap={"big"}
                className={"@container"}
            >
                {cards}
            </Container>
        </FilterListContainer>
    );
};

export default LinksFilterList;

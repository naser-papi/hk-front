import { GetServiceList } from "@/services/services";
import { Container, NoData, ServiceCard } from "@/components/molecule";
import { ServiceDto } from "@/types/dto";
import FilterListContainer from "@/components/organism/filter-list-container";

const ServicesFilterList = async () => {
    const list = await GetServiceList();
    const noData = !list || !list.length;
    const cards = noData ? (
        <NoData />
    ) : (
        list?.map((item: ServiceDto) => (
            <ServiceCard
                key={item.id}
                ikUrl={item.icon.url}
                title={item.title}
                description={item.shortDesc}
                href={`/services/${item.documentId}`}
            />
        ))
    );
    return (
        <FilterListContainer list={list} route={"/services"}>
            <Container direction={"column"} gap={"big"}>
                {cards}
            </Container>
        </FilterListContainer>
    );
};

export default ServicesFilterList;

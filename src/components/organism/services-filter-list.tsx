import { Container, NoData, ServiceCard } from "@/components/molecule";
import { ServiceDto } from "@/types/dto";
import FilterListContainer from "@/components/organism/filter-list-container";
import { GetFilteredServiceList, GetServicesUnionCategories, } from "@/services/services";

const ServicesFilterList = async () => {
    const list = await GetFilteredServiceList();
    const catList = await GetServicesUnionCategories();
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
                verticalLayout={false}
                href={`/services/${item.documentId}`}
            />
        ))
    );
    return (
        <FilterListContainer catList={catList} route={"/services"}>
            <Container direction={"column"} gap={"big"}>
                {cards}
            </Container>
        </FilterListContainer>
    );
};

export default ServicesFilterList;

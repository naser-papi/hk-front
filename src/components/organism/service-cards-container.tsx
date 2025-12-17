import { Container, NoData, ServiceCard } from "@/components/molecule";
import { ServiceDto } from "@/types/dto";
import { GetServiceList } from "@/services/services";

const ServiceCardsContainer = async () => {
    const list = await GetServiceList();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: ServiceDto) => (
        <ServiceCard
            key={item.id}
            ikUrl={item.icon.url}
            title={item.title}
            description={item.shortDesc}
            href={`/services/${item.documentId}`}
        />
    ));
    return (
        <Container
            direction={"column"}
            gap={"big"}
            className={"w-full @container lg:grid lg:grid-cols-2 gap-y-8 place-items-center"}>
            {cards}
        </Container>        
    );
};

export default ServiceCardsContainer;

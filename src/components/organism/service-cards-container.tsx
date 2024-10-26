import { GetTopServices } from "@/services/services";
import { ServiceCard } from "@/components/molecule";
import { ServiceDto } from "@/types/dto";

const ServiceCardsContainer = async () => {
    const list = await GetTopServices();
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
        <article className={"grid place-items-center gap-y-8"}>{cards}</article>
    );
};

export default ServiceCardsContainer;

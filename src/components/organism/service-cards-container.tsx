import { GetTopServices } from "@/services/services";
import { NoData, ServiceCard } from "@/components/molecule";
import { ServiceDto } from "@/types/dto";

const ServiceCardsContainer = async () => {
    const list = await GetTopServices();
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
        <article
            className={
                "service-card-container grid w-full place-items-center gap-y-8"
            }
        >
            {cards}
        </article>
    );
};

export default ServiceCardsContainer;

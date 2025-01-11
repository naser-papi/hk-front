import { ListBannerCard, NoData } from "@/components/molecule";
import { GetTopEvents } from "@/services/events";
import { EventDto } from "@/types/dto";
import { getNavDirection } from "@/helpers";

const EventBannerCarousel = async () => {
    const list = await GetTopEvents();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: EventDto, index) => (
        <ListBannerCard
            key={item.documentId}
            title={item.title}
            ikUrl={item.bannerMedia.url}
            shortDesc={item.shortDesc}
            link={`/events/${item.documentId}`}
            navDirection={getNavDirection(list.length, index)}
        />
    ));
    return <article className={"carousel-container"}>{cards}</article>;
};

export default EventBannerCarousel;

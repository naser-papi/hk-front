import { ListBannerCard, NoData } from "@/components/molecule";
import { EventDto } from "@/types/dto";
import { getNavDirection } from "@/helpers";
import { GetTopEvents } from "@/services/events";
import trans from "@/helpers/i18n/server";

const EventBannerCarousel = async () => {
    const list = await GetTopEvents();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: EventDto, index) => (
        <ListBannerCard
            key={item.documentId}
            title={item.title}
            ikUrl={item.bannerMedia[0].url}
            shortDesc={item.shortDesc}
            link={`/events/${item.documentId}`}
            detailButtonText={trans("common.seeDetailDot")}
            navDirection={getNavDirection(list.length, index)}
        />
    ));
    return <article className={"carousel-container"}>{cards}</article>;
};

export default EventBannerCarousel;

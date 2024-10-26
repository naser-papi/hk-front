import { GetTopEvents } from "@/services/events";
import { EventCard } from "@/components/molecule";
import { EventDto } from "@/types/dto";

const EventCardsContainer = async () => {
    const list = await GetTopEvents();
    const cards = list.map((item: EventDto) => (
        <EventCard
            key={item.id}
            ikUrl={item.cardImage.url}
            desc={item.shortDesc}
            date={item.dateAndTime}
            commentsCount={0}
            href={`/events/${item.documentId}`}
        />
    ));
    return (
        <article className={"grid place-items-center gap-y-8"}>{cards}</article>
    );
};

export default EventCardsContainer;

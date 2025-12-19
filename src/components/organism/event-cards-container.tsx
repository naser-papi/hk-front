import { EventCard, NoData, Container } from "@/components/molecule";
import { EventDto } from "@/types/dto";
import { GetTopEvents } from "@/services/events";

const EventCardsContainer = async () => {
    const list = await GetTopEvents();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: EventDto) => (
        <EventCard
            key={item.id}
            ikUrl={item.cardImage?.url}
            title={item.title}
            desc={item.shortDesc}
            date={item.dateAndTime}
            commentsCount={0}
            eventType={item.eventType}
            eventTimeInDay={item.eventTimeInDay}
            repeatType={item.repeatType}
            address={item.address}
            href={`/events/${item.documentId}`}
        />
    ));
    return (
        <Container
            direction={"column"}
            gap={"big"}
            className={"w-full @container lg:grid lg:grid-cols-2 gap-y-8"}
        >
            {cards}
        </Container>
    );
};

export default EventCardsContainer;

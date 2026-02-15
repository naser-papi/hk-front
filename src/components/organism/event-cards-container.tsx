import { Container, EventCard, NoData } from "@/components/molecule";
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
            verticalLayout={true}
            href={`/events/${item.documentId}`}
        />
    ));
    return (
        <Container
            direction={"column"}
            gap={"big"}
            className={"w-full gap-y-8 @container lg:grid lg:grid-cols-2"}
        >
            {cards}
        </Container>
    );
};

export default EventCardsContainer;

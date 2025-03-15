import { Container, EventCard, NoData } from "@/components/molecule";
import { EventDto } from "@/types/dto";
import FilterListContainer from "@/components/organism/filter-list-container";
import { GetEventList } from "@/services/events";

const EventsFilterList = async () => {
    const list = await GetEventList();
    const noData = !list || !list.length;
    const cards = noData ? (
        <NoData />
    ) : (
        list?.map((item: EventDto) => (
            <EventCard
                key={item.id}
                ikUrl={item.cardImage?.url}
                title={item.title}
                date={item.dateAndTime}
                desc={item.shortDesc}
                commentsCount={0}
                href={`/events/${item.documentId}`}
            />
        ))
    );
    return (
        <FilterListContainer list={list} route={"/events"}>
            <Container
                direction={"column"}
                gap={"big"}
                className={"@container"}
            >
                {cards}
            </Container>
        </FilterListContainer>
    );
};

export default EventsFilterList;

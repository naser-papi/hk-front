import { EventDetail, RelatedContents } from "@/components/organism";

const EventDetailContent = () => {
    return (
        <section id={"event-detail-content"} className={"template bg-white text-black"}>
            <EventDetail />
            <div className={"related-contents"}>
                <RelatedContents contentType={"events"} />
            </div>
        </section>
    );
};

export default EventDetailContent;

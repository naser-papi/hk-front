import { EventDetail, RelatedContents } from "@/components/organism";

const EventDetailContent = () => {
    return (
        <section id={"blog-detail-content"} className={"template text-black"}>
            <EventDetail />
            <div className={"related-contents"}>
                <RelatedContents contentType={"events"} />
            </div>
        </section>
    );
};

export default EventDetailContent;

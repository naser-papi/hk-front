import { EventDetail } from "@/components/organism";
import { GetEventDetail } from "@/services/events";
import { NoData } from "@/components/molecule";
import { DetailContentHeader } from "@/components/template/index";

const EventDetailContent = async () => {
    const info = await GetEventDetail();
    if (!info) return <NoData />;
    return (
        <section
            id={"service-detail-content"}
            className={
                "template xs:folded-corner z-20 mx-auto mb-[100px] mt-[-50px] !bg-white text-black sm:mt-[-100px] lg:mt-[-200px]"
            }
        >
            <DetailContentHeader title={info.title} meta={[]} />
            <EventDetail info={info} />
        </section>
    );
};

export default EventDetailContent;

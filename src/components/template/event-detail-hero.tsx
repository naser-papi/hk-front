import { MobileMenu, TopNav } from "@/components/template";
import { EventDetailBanner } from "@/components/organism";

const EventDetailHero = () => {
    return (
        <section
            id={"event-detail-hero"}
            className={
                "template bg-primary [&_.detail-page-banner]:mt-4 [&_.info-box:last-of-type]:w-auto"
            }
        >
            <TopNav />
            <EventDetailBanner />
            <MobileMenu />
        </section>
    );
};

export default EventDetailHero;

import {
    EventDetailContent,
    EventDetailHero,
    Footer,
} from "@/components/template";

const EventDetailPage = () => {
    return (
        <main className="page-default-container">
            <EventDetailHero />
            <EventDetailContent />
            <Footer />
        </main>
    );
};

export default EventDetailPage;

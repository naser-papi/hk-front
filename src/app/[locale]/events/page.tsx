import { EventsHero, EventsList, Footer } from "@/components/template";

const EventsPage = () => {
    return (
        <main className="page-default-container">
            <EventsHero />
            <EventsList />
            <Footer />
        </main>
    );
};

export default EventsPage;

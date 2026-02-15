import { EventsHero, EventsList, MainHeader } from "@/components/template";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/atom";

const Footer = dynamic(() => import("@/components/template/footer"), {
    loading: LoadingSkeleton,
});

const EventsPage = () => {
    return (
        <main className="page-default-container">
            <MainHeader />
            <EventsHero />
            <EventsList />
            <Footer />
        </main>
    );
};

export default EventsPage;

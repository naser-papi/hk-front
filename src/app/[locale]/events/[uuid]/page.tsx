import {
    EventDetailContent,
    EventDetailHero,
    MainHeader,
    RelatedContentContainer,
} from "@/components/template";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/atom";

const Footer = dynamic(() => import("@/components/template/footer"), {
    loading: LoadingSkeleton,
});

const EventDetailPage = () => {
    return (
        <main className="page-default-container">
            <MainHeader />
            <EventDetailHero />
            <EventDetailContent />
            <RelatedContentContainer contentType={"events"} />
            <Footer />
        </main>
    );
};

export default EventDetailPage;

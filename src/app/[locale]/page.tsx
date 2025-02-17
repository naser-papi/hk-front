import {
    Footer,
    LandingBlogs,
    LandingContact,
    LandingEvents,
    LandingHero,
    LandingLinks,
    LandingServices,
} from "@/components/template";
import StoreScroll from "@/components/organism/store-scroll";

export default function Home() {
    return (
        <main className="page-default-container">
            <StoreScroll />
            <LandingHero />
            <LandingServices />
            <LandingBlogs />
            <LandingEvents />
            <LandingLinks />
            <LandingContact />
            <Footer />
        </main>
    );
}

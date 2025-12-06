import {
    Footer,
    LandingBlogs,
    LandingContact,
    LandingEvents,
    LandingHero,
    LandingLinks,
    LandingServices,
    MainHeader,
} from "@/components/template";
import StoreScroll from "@/components/organism/store-scroll";


export default async function Home() {
    return (
        <main className="page-default-container">
            <StoreScroll />
            <MainHeader />
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

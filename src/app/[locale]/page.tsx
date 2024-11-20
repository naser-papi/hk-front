import {
    Footer,
    LandingBlogs,
    LandingContact,
    LandingEvents,
    LandingHero,
    LandingLinks,
    LandingServices,
} from "@/components/template";

export default function Home() {
    return (
        <main className="page-default-container">
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

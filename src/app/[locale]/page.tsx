import {
    Footer,
    LandingHero,
    LandingLinks,
    LandingServices,
    MainHeader,
} from "@/components/template";
import StoreScroll from "@/components/organism/store-scroll";
import dynamic from "next/dynamic";

// Lazy load below-fold components for better initial page load
const LandingBlogs = dynamic(() => import("@/components/template/landing-blogs"), {
    loading: () => <div className="h-64 animate-pulse bg-neutral-200 rounded-lg" />,
});

const LandingEvents = dynamic(() => import("@/components/template/landing-events"), {
    loading: () => <div className="h-64 animate-pulse bg-neutral-200 rounded-lg" />,
});

const LandingContact = dynamic(() => import("@/components/template/landing-contact"), {
    loading: () => <div className="h-64 animate-pulse bg-neutral-200 rounded-lg" />,
});

export default async function Home() {
    return (
        <main id="main-content" className="page-default-container" role="main">
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

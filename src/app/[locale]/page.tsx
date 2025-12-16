import {
    Footer,
    LandingHero,
    LandingLinks,
    LandingServices,
    MainHeader,
} from "@/components/template";
import { LoadingSkeleton } from "@/components/atom";
import StoreScroll from "@/components/organism/store-scroll";
import dynamic from "next/dynamic";

// Lazy load below-fold components for better initial page load
const LandingBlogs = dynamic(() => import("@/components/template/landing-blogs"), {
    loading: LoadingSkeleton,
});

const LandingEvents = dynamic(() => import("@/components/template/landing-events"), {
    loading: LoadingSkeleton,
});

const LandingContact = dynamic(() => import("@/components/template/landing-contact"), {
    loading: LoadingSkeleton,
});

export default async function Home() {
    return (
        <main id="main-content" className="page-default-container" role="main">
            <StoreScroll />
            <MainHeader />
            <LandingHero />            
            <LandingBlogs />
            <LandingServices />
            <LandingEvents />
            <LandingLinks />
            <LandingContact />
            <Footer />
        </main>
    );
}

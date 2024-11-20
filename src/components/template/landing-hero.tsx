import { BannerCarousel } from "@/components/organism";
import TopNav from "./top-nav";
import MobileMenu from "./mobile-menu";

const LandingHero = () => {
    return (
        <section id={"hero"} className={"bg-primary"}>
            <TopNav />
            <BannerCarousel />
            <MobileMenu />
        </section>
    );
};

export default LandingHero;

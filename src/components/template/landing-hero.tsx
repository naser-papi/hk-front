import { BannerCarousel } from "@/components/organism";
import TopNav from "./top-nav";
import MobileMenu from "./mobile-menu";

const LandingHero = () => {
    return (
        <section id={"hero"} className={"template hero bg-primary"}>
            <TopNav />
            <BannerCarousel />
            <MobileMenu />
        </section>
    );
};

export default LandingHero;

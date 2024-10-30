import { BannerCarousel } from "@/components";
import MobileMenu from "./mobile-menu";
import TopNav from "./top-nav";
import "../template.css";

const Hero = () => {
    return (
        <section id={"hero"} className={"template hero"}>
            <TopNav />
            <BannerCarousel />
            <MobileMenu />
        </section>
    );
};

export default Hero;

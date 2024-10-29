import { BannerCarousel } from "@/components";
import MobileMenu from "./mobile-menu";
import TopNav from "./top-nav";

const Hero = () => {
    return (
        <section
            id={"hero"}
            className={
                "[&_.banner-card] relative mx-auto grid w-full max-w-5xl place-items-center gap-4 bg-primary p-4"
            }
        >
            <TopNav />
            <BannerCarousel />
            <MobileMenu />
        </section>
    );
};

export default Hero;

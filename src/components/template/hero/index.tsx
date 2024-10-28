import { BannerCarousel, MobileNav } from "@/components";

const Hero = () => {
    return (
        <section
            id={"hero"}
            className={"grid w-full place-items-center gap-4 bg-altLight p-4"}
        >
            <MobileNav />
            <BannerCarousel />
        </section>
    );
};

export default Hero;

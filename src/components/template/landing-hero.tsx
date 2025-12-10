import { LandingBannerCarousel } from "@/components/organism";


const LandingHero = () => {
    return (
        <section id={"hero"} className={"template hero bg-primaryLight"}>
            <div className={"w-full rounded-2xl bg-white/90 p-4 shadow-lg"}>
                <LandingBannerCarousel />
            </div>
        </section>
    );
};

export default LandingHero;

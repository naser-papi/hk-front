import React from "react";
import { TopNav } from "@/components/template";
import MobileMenu from "@/components/template/mobile-menu";
import { EventBannerCarousel } from "@/components/organism";

const EventsHero = () => {
    return (
        <section id={"events-hero"} className={"template hero bg-primary"}>
            <TopNav />
            <EventBannerCarousel />
            <MobileMenu />
        </section>
    );
};

export default EventsHero;

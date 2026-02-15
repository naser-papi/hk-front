import React from "react";
import { EventBannerCarousel } from "@/components/organism";

const EventsHero = () => {
    return (
        <section id={"events-hero"} className={"template hero bg-primary"}>
            <EventBannerCarousel />
        </section>
    );
};

export default EventsHero;

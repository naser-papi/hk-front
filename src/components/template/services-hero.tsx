import React from "react";
import { ServicesVideo } from "@/components/organism";
import TopNav from "./top-nav";
import MobileMenu from "./mobile-menu";

const ServicesHero = () => {
    return (
        <section id={"services-hero"} className={"template hero bg-primary"}>
            <TopNav />
            <ServicesVideo />
            <MobileMenu />
        </section>
    );
};

export default ServicesHero;

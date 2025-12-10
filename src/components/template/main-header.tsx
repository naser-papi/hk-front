import React from "react";
import TopNav from "@/components/template/top-nav";
import MobileMenu from "@/components/template/mobile-menu";

const MainHeader = () => {
    return (
        <header
            id={"header"}
            className={
                "fixed top-0 z-50 w-full border-b border-altLight bg-white/80 backdrop-blur-md [&+_.template]:mt-[96px]"
            }
        >
            <div className={"mx-auto w-full max-w-5xl px-4 py-3"}>
                <TopNav />
                <MobileMenu />
            </div>
        </header>
    );
};

export default MainHeader;

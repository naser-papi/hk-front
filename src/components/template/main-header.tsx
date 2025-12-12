import React from "react";
import TopNav from "@/components/template/top-nav";
import MobileMenu from "@/components/template/mobile-menu";

const MainHeader = () => {
    return (
        <header id={"header"} role="banner" className={"fixed top-0 w-full z-50 [&+_.template]:mt-[108px]"}>
            <div className={"bg-primary mx-auto w-full max-w-5xl p-4 drop-shadow-md"}>
                <TopNav />
                <MobileMenu />
            </div>
        </header>
    );
};

export default MainHeader;

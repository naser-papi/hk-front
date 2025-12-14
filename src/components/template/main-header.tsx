"use client";
import React from "react";
import { useSnapshot } from "valtio/react";
import TopNav from "@/components/template/top-nav";
import MobileMenu from "@/components/template/mobile-menu";
import BaseState from "@/stores/base";
import { useScrollDetection } from "@/hooks";

const MainHeader = () => {
    const { isScrolled } = useSnapshot(BaseState);
    
    // Initialize scroll detection (updates global state)
    useScrollDetection();

    return (
        <header 
            id={"header"} 
            role="banner" 
            className={"sticky top-0 w-full z-50 transition-all duration-300"}
        >
            <div 
                className={`
                    relative mx-auto w-full max-w-5xl p-4 
                    transition-all duration-300 ease-in-out
                    ${isScrolled 
                        ? "bg-primary/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/30 shadow-2xl" 
                        : "bg-primary drop-shadow-md"
                    }
                `}
                style={isScrolled ? {
                    WebkitBackdropFilter: 'blur(16px) saturate(150%)',
                    backdropFilter: 'blur(16px) saturate(150%)',
                } : {}}
            >
                <TopNav />
                <MobileMenu />
            </div>
        </header>
    );
};

export default MainHeader;

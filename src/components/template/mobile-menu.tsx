"use client";
import BaseState from "@/stores/base";
import { useSnapshot } from "valtio/react";
import { MainMenu } from "@/components/organism";


const MobileMenu = () => {
    const { showMenu, isScrolled } = useSnapshot(BaseState);    
    
    if (!showMenu) return null;
    
    return (
        <div
            className={`
                top-full w-full mobile-menu-gradient
                border-t border-white/20
                shadow-2xl
                px-4
                lg:hidden
                transition-all duration-300 ease-in-out
                overflow-hidden
                ${isScrolled 
                    ? "bg-primary/80 backdrop-blur-2xl backdrop-saturate-150 border-white/30" 
                    : "bg-primary"
                }
            `}
            style={isScrolled ? {
                WebkitBackdropFilter: 'blur(48px) saturate(250%)',
                backdropFilter: 'blur(48px) saturate(250%)',
            } : {}}
            role="navigation"
            aria-label="Mobile navigation menu"
            aria-hidden={!showMenu}
        >
            <MainMenu direction="col" />            
        </div>
    );
};

export default MobileMenu;

"use client";
import BaseState from "@/stores/base";
import { useSnapshot } from "valtio/react";
import { MainMenu } from "@/components/organism";


const MobileMenu = () => {
    const { showMenu } = useSnapshot(BaseState);    
    
    if (!showMenu) return null;
    
    return (
        <div
            className={`
                top-full w-full
                bg-primary backdrop-blur-2xl backdrop-saturate-250
                border-t border-white/20
                shadow-2xl
                lg:hidden
                transition-all duration-300 ease-in-out
                overflow-hidden
            `}
            style={{
                WebkitBackdropFilter: 'blur(32px) saturate(150%)',
                backdropFilter: 'blur(32px) saturate(150%)',
            }}
            role="navigation"
            aria-label="Mobile navigation menu"
            aria-hidden={!showMenu}
        >
            <MainMenu direction="col" />            
        </div>
    );
};

export default MobileMenu;

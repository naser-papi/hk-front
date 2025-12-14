"use client";
import React, { useEffect, useState } from "react";
import TopNav from "@/components/template/top-nav";
import MobileMenu from "@/components/template/mobile-menu";

const MainHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let pageContainer: HTMLElement | null = null;
        
        const handleScroll = () => {
            // Check scroll position on the page container
            const scrollTop = pageContainer?.scrollTop ?? window.scrollY ?? document.documentElement.scrollTop ?? 0;
            setIsScrolled(scrollTop > 20);
        };

        // Wait for container to be available
        const setupScrollListener = () => {
            pageContainer = document.querySelector(".page-default-container") as HTMLElement;
            
            if (pageContainer) {
                pageContainer.addEventListener("scroll", handleScroll, { passive: true });
                handleScroll(); // Check initial position
            } else {
                // Retry after a short delay if container not found
                setTimeout(setupScrollListener, 100);
            }
        };

        // Also listen to window scroll as fallback
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // Initial setup
        setupScrollListener();
        
        return () => {
            if (pageContainer) {
                pageContainer.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

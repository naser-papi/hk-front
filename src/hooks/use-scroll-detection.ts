import { useEffect } from "react";
import BaseState from "@/stores/base";

/**
 * Custom hook that detects scroll position and updates the global isScrolled state.
 * This hook sets up scroll listeners on both the page container and window,
 * and updates BaseState.isScrolled when scroll position exceeds 20px.
 * 
 * Can be used in any component that needs to react to scroll state.
 */
const useScrollDetection = () => {
    useEffect(() => {
        let pageContainer: HTMLElement | null = null;
        
        const handleScroll = () => {
            // Check scroll position on the page container
            const scrollTop = pageContainer?.scrollTop ?? window.scrollY ?? document.documentElement.scrollTop ?? 0;
            BaseState.isScrolled = scrollTop > 20;
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
};

export default useScrollDetection;


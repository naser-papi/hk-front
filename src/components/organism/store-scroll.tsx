"use client";
import { useEffect, useRef } from "react";
import { debounceBrowserAction } from "@/helpers";

const StoreScroll = () => {
    const mainContainer = useRef<HTMLElement | null>(null);

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
        if (!mainContainer.current) return;
        if (mainContainer.current.scrollTop <= 500) {
            mainContainer.current.dataset.scroll = "0";
        } else {
            mainContainer.current.dataset.scroll =
                mainContainer.current.scrollTop.toString();
        }
    };

    useEffect(() => {
        mainContainer.current = document.querySelector(
            "main.page-default-container"
        )! as HTMLElement;

        // Listen for new scroll events, here we debounce our `storeScroll` function
        mainContainer.current.addEventListener(
            "scroll",
            debounceBrowserAction(storeScroll),
            { passive: true }
        );
        // Update scroll position for first time
        storeScroll();

        // Clean up to remove listener when component unmounts
        return () =>
            mainContainer?.current?.removeEventListener(
                "scroll",
                debounceBrowserAction(storeScroll)
            );
    }, []);
    return <></>;
};

export default StoreScroll;

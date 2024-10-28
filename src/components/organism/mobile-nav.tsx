"use client";
import { Button, NlLogo } from "@/components";
import { faBars } from "@awesome.me/kit-026a927a83/icons/classic/solid";

const MobileNav = () => {
    return (
        <nav
            className={
                "mobile-nav flex w-full items-center justify-between drop-shadow-lg"
            }
        >
            <NlLogo type={"default"} />
            <aside className={"flex items-center gap-3"}>
                <Button
                    icon={faBars}
                    label=""
                    intend={"tertiary"}
                    onClick={() => {
                        console.log("clicked");
                    }}
                    className={"text-xl font-bold"}
                />
                <Button
                    label={"FA"}
                    intend={"tertiary"}
                    className={"text-xl font-bold text-secondary"}
                />
            </aside>
        </nav>
    );
};

export default MobileNav;

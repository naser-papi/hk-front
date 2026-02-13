import {
    ContactUs,
    Copyright,
    QuickLinks,
    Socials,
} from "@/components/organism";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/atom";

const About = dynamic(() => import("@/components/organism/footer/about"), {
    loading: LoadingSkeleton,
});

const Footer = () => {
    return (
        <footer
            id={"footer"}
            role="contentinfo"
            className={"template relative"}
        >
            <div className={"footer"}>
                <About />
                <QuickLinks />
                <ContactUs />
                <Socials />
                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;

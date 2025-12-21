import Image from "next/image";
import footerBk from "assets/images/footer-bk.png";
import {
    About,
    ContactUs,
    Copyright,
    Socials,
    QuickLinks,
} from "@/components/organism";

const Footer = () => {
    return (
        <footer id={"footer"} role="contentinfo" className={"template relative"}>                
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

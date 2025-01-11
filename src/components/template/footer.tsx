import Image from "next/image";
import footerBk from "assets/images/footer-bk.png";
import {
    About,
    Address,
    CallUs,
    Copyright,
    Socials,
} from "@/components/organism";

const Footer = () => {
    return (
        <footer id={"footer"} className={"template relative"}>
            <Image src={footerBk} alt="footer" fill className={"z-0"} />
            <div className={"footer"}>
                <About />
                <CallUs />
                <Address />
                <Socials />
                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;

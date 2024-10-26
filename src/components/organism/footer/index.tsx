import footerBk from "assets/images/footer-bk.png";
import Image from "next/image";
import About from "@/components/organism/footer/about";
import CustomerRate from "@/components/organism/footer/customer-rate";
import CallUs from "@/components/organism/footer/call-us";
import Address from "@/components/organism/footer/address";
import Socials from "@/components/organism/footer/socials";
import Copyright from "@/components/organism/footer/copyright";

const Footer = () => {
    return (
        <div className={"relative"}>
            <Image src={footerBk} alt="footer" fill className={"z-0"} />
            <div
                className={
                    "relative z-10 grid min-h-[1140px] content-start gap-y-1 px-4 pb-12 pt-4 [&>section]:h-fit [&>section]:border-b-2 [&>section]:border-dotted [&>section]:py-2"
                }
            >
                <About />
                <CustomerRate />
                <CallUs />
                <Address />
                <Socials />
                <Copyright />
            </div>
        </div>
    );
};

export default Footer;

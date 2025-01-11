import TopNav from "@/components/template/top-nav";
import MobileMenu from "@/components/template/mobile-menu";
import { ServiceDetailBanner } from "@/components/organism";

const ServiceDetailHero = () => {
    return (
        <section
            id={"service-detail-hero"}
            className={
                "template bg-primary [&_.detail-page-banner]:mt-4 [&_.info-box:last-of-type]:w-auto"
            }
        >
            <TopNav />
            <ServiceDetailBanner />
            <MobileMenu />
        </section>
    );
};

export default ServiceDetailHero;

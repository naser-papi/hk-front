import {
    MainHeader,
    RelatedContentContainer,
    ServiceDetailContent,
    ServiceDetailHero,
} from "@/components/template";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/atom";

const Footer = dynamic(() => import("@/components/template/footer"), {
    loading: LoadingSkeleton,
});

const ServiceDetailPage = () => {
    return (
        <main className="page-default-container">
            <MainHeader />
            <ServiceDetailHero />
            <ServiceDetailContent />
            <RelatedContentContainer contentType={"services"} />
            <Footer />
        </main>
    );
};

export default ServiceDetailPage;

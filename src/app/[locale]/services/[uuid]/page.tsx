import { Footer, ServiceDetailHero } from "@/components/template";
import { ServiceDetailContent } from "@/components/template/";

const ServiceDetailPage = () => {
    return (
        <main className="page-default-container">
            <ServiceDetailHero />
            <ServiceDetailContent />
            <Footer />
        </main>
    );
};

export default ServiceDetailPage;

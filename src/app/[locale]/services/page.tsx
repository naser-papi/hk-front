import { Footer, ServicesHero, ServicesList } from "@/components/template";

const ServicesPage = () => {
    return (
        <main className="page-default-container">
            <ServicesHero />
            <ServicesList />
            <Footer />
        </main>
    );
};

export default ServicesPage;

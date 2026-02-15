import {
    Footer,
    MainHeader,
    ServicesHero,
    ServicesList,
} from "@/components/template";

const ServicesPage = () => {
    return (
        <main className="page-default-container">
            <MainHeader />
            <ServicesHero />
            <ServicesList />
            <Footer />
        </main>
    );
};

export default ServicesPage;

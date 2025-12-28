import trans from "@/helpers/i18n/server";
import ServiceCardsContainer from "@/components/organism/service-cards-container";
import { SectionHeader } from "@/components/molecule";


const Services = () => {
    return (
        <section
            id={"services"}
            className={"template scroll-mt-20"}
        >
            <SectionHeader
                title={trans("common.topServices")}
                description={trans("common.topServicesDesc")}
                descriptionClassName="text-gray-100"
                buttonLabel={trans("common.allServices")}
                buttonLink="/services"
            />
            <ServiceCardsContainer />           
        </section>
    );
};

export default Services;

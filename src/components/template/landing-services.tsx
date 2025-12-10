import trans from "@/helpers/i18n/server";
import ServiceCardsContainer from "@/components/organism/service-cards-container";
import { ShowMoreLink } from "@/components/atom";
import face2 from "assets/show-more/face-2.svg";

const Services = () => {
    return (
        <section
            id={"services"}
            className={
                "template bg-white lg:[&_.service-card-container]:grid-col-2-gap-6"
            }
        >
            <h2>{trans("common.ourServices")}</h2>
            <ServiceCardsContainer />
            <ShowMoreLink
                label={trans("common.allServices")}
                image={face2}
                href={"/services"}
            />
        </section>
    );
};

export default Services;

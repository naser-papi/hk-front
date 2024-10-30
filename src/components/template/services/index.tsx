import trans from "@/helpers/i18n/server";
import ServiceCardsContainer from "@/components/organism/service-cards-container";
import { ShowMoreLink } from "@/components";
import face2 from "assets/show-more/face-2.svg";
import "./services.css";

const Services = () => {
    return (
        <section id={"services"} className={"services"}>
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

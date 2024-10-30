import trans from "@/helpers/i18n/server";
import { LinkCardsContainer, ShowMoreLink } from "@/components";
import face4 from "assets/show-more/face-4.svg";
import "../template.css";

const Links = () => {
    return (
        <section id={"links"} className={"template links"}>
            <h2>{trans("common.usefulLinks")}</h2>
            <LinkCardsContainer />
            <ShowMoreLink
                label={trans("common.allLinks")}
                image={face4}
                href={"/links"}
            />
        </section>
    );
};

export default Links;

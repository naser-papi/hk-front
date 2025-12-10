import trans from "@/helpers/i18n/server";
import { LinkCardsContainer } from "@/components/organism";
import { ShowMoreLink } from "@/components/atom";
import face4 from "assets/show-more/face-4.svg";

const LandingLinks = () => {
    return (
        <section id={"links"} className={"template"}>
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

export default LandingLinks;

import trans from "@/helpers/i18n/server";
import { BlogCardsContainer } from "@/components/organism";
import { ShowMoreLink } from "@/components/atom";
import face6 from "assets/show-more/face-6.svg";

const LandingBlogs = () => {
    return (
        <section id={"blogs"} className={"template"}>
            <h2>{trans("common.knowledgeSharing")}</h2>
            <BlogCardsContainer />
            <ShowMoreLink
                label={trans("common.allBlogs")}
                image={face6}
                href={"/blogs"}
            />
        </section>
    );
};

export default LandingBlogs;

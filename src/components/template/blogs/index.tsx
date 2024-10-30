import trans from "@/helpers/i18n/server";
import { BlogCardsContainer, ShowMoreLink } from "@/components";
import face6 from "assets/show-more/face-6.svg";
import "../template.css";

const Blogs = () => {
    return (
        <section id={"blogs"} className={"template blogs"}>
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

export default Blogs;

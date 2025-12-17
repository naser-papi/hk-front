import trans from "@/helpers/i18n/server";
import { BlogCardsContainer } from "@/components/organism";
import { SectionHeader } from "@/components/molecule";

const LandingBlogs = () => {
    return (
        <section id={"blogs"} className={"template"}>
            <SectionHeader
                title={trans("common.latestArticles")}
                description={trans("common.latestArticlesDesc")}
                buttonLabel={trans("common.allBlogs")}
                buttonLink="/blogs"
            />
            <BlogCardsContainer />           
        </section>
    );
};

export default LandingBlogs;

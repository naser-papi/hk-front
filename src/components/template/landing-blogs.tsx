import trans from "@/helpers/i18n/server";
import { BlogCardsContainer } from "@/components/organism";
import { Button } from "@/components/atom";

const LandingBlogs = () => {
    return (
        <section id={"blogs"} className={"template"}>
            <header className="flex justify-between items-center w-full my-10">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{trans("common.latestArticles")}</h2>
                    <p className="text-sm text-gray-500">{trans("common.latestArticlesDesc")}</p>
                </div>
                <Button variant="secondary" label={trans("common.allBlogs")} link="/blogs" />                    
            </header>            
            <BlogCardsContainer />           
        </section>
    );
};

export default LandingBlogs;

import trans from "@/helpers/i18n/server";

const BlogsHero = () => {
    return (
        <section id={"blogs-hero"} className={"template hero bg-primary"}>          
            <div className={"w-full h-[265px] bg-secondary flex flex-col gap-4 items-start justify-center p-8"}>
                <h1 className={"text-4xl font-bold text-white"}>
                    {trans("common.blogsHeader")}
                </h1>
                <p className={"text-white text-xl"}>
                    {trans("common.blogsHeaderDesc")}
                </p>
            </div>           
        </section>
    );
};

export default BlogsHero;

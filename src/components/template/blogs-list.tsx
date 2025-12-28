import { BlogsFilterList } from "@/components/organism";

const BlogsList = () => {
    return (
        <section id={"blogs-list"} className={"template [&_.filter-list-container]:mt-[-100px]"}>
            <BlogsFilterList />
        </section>
    );
};

export default BlogsList;

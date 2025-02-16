import { BlogDetail, BlogRelatedContents } from "@/components/organism";

const BlogDetailContent = () => {
    return (
        <section id={"blog-detail-content"} className={"template text-black"}>
            <BlogDetail />
            <BlogRelatedContents />
        </section>
    );
};

export default BlogDetailContent;

import { BlogDetail, RelatedContents } from "@/components/organism";

const BlogDetailContent = () => {
    return (
        <section id={"blog-detail-content"} className={"template bg-white text-black"}>
            <BlogDetail />
            <div className={"related-contents"}>
                <RelatedContents contentType={"blogs"} />
            </div>
        </section>
    );
};

export default BlogDetailContent;

import {
    BlogDetailContent,
    BlogDetailHero,
    CommentsSection,
    MainHeader,
    RelatedContentContainer,
} from "@/components/template";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/atom";

const Footer = dynamic(() => import("@/components/template/footer"), {
    loading: LoadingSkeleton,
});

// couldn't be rendered statically because it used `headers`
// import { GetBlogList } from "@/services/blogs";
// export async function generateStaticParams() {
//     const list = await GetBlogList();
//
//     return list.map((item) => ({
//         uuid: item.documentId,
//     }));
// }

const BlogDetailPage = () => {
    return (
        <main className="page-default-container">
            <MainHeader />
            <BlogDetailHero />
            <BlogDetailContent />
            <CommentsSection />
            <RelatedContentContainer contentType={"blogs"} />
            <Footer />
        </main>
    );
};

export default BlogDetailPage;

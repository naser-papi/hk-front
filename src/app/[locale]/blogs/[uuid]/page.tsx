import {
    BlogDetailContent,
    BlogDetailHero,
    CommentsSection,
} from "@/components/template";
import Footer from "@/components/template/footer";

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
            <BlogDetailHero />
            <BlogDetailContent />
            <CommentsSection />
            <Footer />
        </main>
    );
};

export default BlogDetailPage;

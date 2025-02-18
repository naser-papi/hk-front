import {
    BlogDetailContent,
    BlogDetailHero,
    CommentsSection,
} from "@/components/template";
import Footer from "@/components/template/footer";

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

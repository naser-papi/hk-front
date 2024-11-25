import { BlogDetailHero } from "@/components/template";
import BlogDetailContent from "@/components/template/blog-detail-content";
import Footer from "@/components/template/footer";

const BlogDetailPage = () => {
    return (
        <main className="page-default-container">
            <BlogDetailHero />
            <BlogDetailContent />
            <Footer />
        </main>
    );
};

export default BlogDetailPage;

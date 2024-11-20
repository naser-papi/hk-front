import { BlogsHero, BlogsList, Footer } from "@/components/template";

const BlogsPage = () => {
    return (
        <main className="page-default-container">
            <BlogsHero />
            <BlogsList />
            <Footer />
        </main>
    );
};

export default BlogsPage;

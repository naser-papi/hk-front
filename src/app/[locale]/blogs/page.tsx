import { BlogsHero, BlogsList, Footer, MainHeader } from "@/components/template";

const BlogsPage = () => {
    return (
        <main className="page-default-container">
            <MainHeader />
            <BlogsHero />
            <BlogsList />
            <Footer />
        </main>
    );
};

export default BlogsPage;

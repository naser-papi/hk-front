import { BlogsHero, BlogsList, MainHeader } from "@/components/template";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/atom";

const Footer = dynamic(() => import("@/components/template/footer"), {
    loading: LoadingSkeleton,
});

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

import { BlogDetailBanner } from "@/components/organism";
import TopNav from "./top-nav";
import MobileMenu from "./mobile-menu";

const BlogDetailHero = () => {
    return (
        <section
            id={"blog-detail-hero"}
            className={
                "template bg-primary [&_.detail-page-banner]:mt-8 [&_.info-box:last-of-type]:w-auto"
            }
        >
            <TopNav />
            <BlogDetailBanner />
            <MobileMenu />
        </section>
    );
};

export default BlogDetailHero;

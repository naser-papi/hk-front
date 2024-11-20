import TopNav from "./top-nav";
import MobileMenu from "./mobile-menu";
import { BlogBannerCarousel } from "@/components/organism";

const BlogsHero = () => {
    return (
        <section id={"blogs-hero"} className={"template hero"}>
            <TopNav />
            <BlogBannerCarousel />
            <MobileMenu />
        </section>
    );
};

export default BlogsHero;

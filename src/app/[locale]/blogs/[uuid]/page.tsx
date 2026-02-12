import {
    BlogDetailContent,    
    CommentsSection,
    MainHeader,
    BlogDetailHero,
    RelatedContentContainer,
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

import { GetBlogDetail } from "@/services/blogs";
import { NoData, VideoPlayer } from "@/components/molecule";
import { normalizeHTMLContent } from "@/helpers";

const BlogDetail = async () => {
    const info = await GetBlogDetail();
    if (!info) return <NoData />;
    const replacedFontFS = normalizeHTMLContent(info.firstSection);
    const replacedFontSS = normalizeHTMLContent(info.secondSection);
    return (
        <div className={"content-detail-body"}>
            <h3>{info.subTitle}</h3>
            <article
                dangerouslySetInnerHTML={{ __html: replacedFontFS }}
            ></article>
            <VideoPlayer url={info.videoUrl} />
            <article
                dangerouslySetInnerHTML={{ __html: replacedFontSS }}
            ></article>
        </div>
    );
};

export default BlogDetail;

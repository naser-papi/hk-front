import { HtmlViewer } from "@/components/atom";
import { VideoPlayer } from "@/components/molecule";
import { normalizeHTMLContent } from "@/helpers";
import { BlogDto } from "@/types/dto/blog";

interface BlogDetailProps {
    info: BlogDto;
}
const BlogDetail = async ({ info }: BlogDetailProps) => {
    const replacedFontFS = normalizeHTMLContent(info.firstSection);
    const replacedFontSS = normalizeHTMLContent(info.secondSection);
    return (
        <div className={"content-detail-body"}>
            <h3>{info.subTitle}</h3>
            <HtmlViewer content={replacedFontFS} />
            <VideoPlayer url={info.videoUrl} />
            <HtmlViewer content={replacedFontSS} />
        </div>
    );
};

export default BlogDetail;

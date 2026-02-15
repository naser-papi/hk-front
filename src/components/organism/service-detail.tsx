import { NoData, VideoPlayer } from "@/components/molecule";
import { normalizeHTMLContent } from "@/helpers";
import { HtmlViewer } from "@/components/atom";
import { ServiceDto } from "@/types/dto";

interface ServiceDetailProps {
    info: ServiceDto;
}
const ServiceDetail = async ({ info }: ServiceDetailProps) => {
    if (!info) return <NoData />;
    const replacedFontFS = normalizeHTMLContent(info.firstSection);
    const replacedFontSS = normalizeHTMLContent(info.secondSection);
    return (
        <div className={"content-detail-body"}>
            <h3>{info.shortDesc}</h3>
            <HtmlViewer content={replacedFontFS} />
            <VideoPlayer url={info.videoUrl} />
            <HtmlViewer content={replacedFontSS} />
        </div>
    );
};

export default ServiceDetail;

import { NoData, VideoPlayer } from "@/components/molecule";
import { GetServiceDetail } from "@/services/services";
import { normalizeHTMLContent } from "@/helpers";

const ServiceDetail = async () => {
    const info = await GetServiceDetail();
    if (!info) return <NoData />;
    const replacedFontFS = normalizeHTMLContent(info.firstSection);
    const replacedFontSS = normalizeHTMLContent(info.secondSection);
    return (
        <div className={"content-detail-body"}>
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

export default ServiceDetail;

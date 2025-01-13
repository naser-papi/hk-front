import { NoData, VideoPlayer } from "@/components/molecule";
import { GetServiceDetail } from "@/services/services";

const ServiceDetail = async () => {
    const info = await GetServiceDetail();
    if (!info) return <NoData />;
    const replacedFontFS =
        info.firstSection?.replace(/font-family:[^;]+;/g, "") || "";
    const replacedFontSS =
        info.secondSection?.replace(/font-family:[^;]+;/g, "") || "";
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

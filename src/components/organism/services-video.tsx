import { NoData } from "@/components/molecule";
import VideoPlayer from "@/components/molecule/video-player";
import { GetCompanyInfo } from "@/services/company-info";

const ServicesVideo = async () => {
    const companyInfo = await GetCompanyInfo();
    if (
        !companyInfo ||
        !Object.entries(companyInfo).length ||
        !companyInfo.servicesIntroUrl
    )
        return <NoData />;
    return <VideoPlayer url={companyInfo.servicesIntroUrl} />;
};

export default ServicesVideo;

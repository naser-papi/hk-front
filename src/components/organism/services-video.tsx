import { GetCompanyInfo } from "@/services/company-info";
import { NoData } from "@/components/molecule";
import VideoPlayer from "@/components/molecule/video-player";

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

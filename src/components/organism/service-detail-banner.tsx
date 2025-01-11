import { DetailPageBanner, NoData } from "@/components/molecule";
import { GetServiceDetail } from "@/services/services";

const ServiceDetailBanner = async () => {
    const info = await GetServiceDetail();
    if (!info) return <NoData />;
    return (
        <DetailPageBanner
            title={info.title}
            images={[info.bannerMedia.url]}
            shortDesc={info.shortDesc}
        />
    );
};

export default ServiceDetailBanner;

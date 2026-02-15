import { ServiceDetail } from "@/components/organism";
import { GetServiceDetail } from "@/services/services";
import { NoData } from "@/components/molecule";
import { DetailContentHeader } from "@/components/template/index";

const ServiceDetailContent = async () => {
    const info = await GetServiceDetail();
    if (!info) return <NoData />;
    return (
        <section
            id={"service-detail-content"}
            className={
                "template xs:folded-corner z-20 mx-auto mb-[100px] mt-[-50px] !bg-white text-black sm:mt-[-100px] lg:mt-[-200px]"
            }
        >
            <DetailContentHeader title={info.title} meta={[]} />
            <ServiceDetail info={info} />
        </section>
    );
};

export default ServiceDetailContent;

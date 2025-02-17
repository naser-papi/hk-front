import { RelatedContents, ServiceDetail } from "@/components/organism";

const ServiceDetailContent = () => {
    return (
        <section
            id={"service-detail-content"}
            className={"template text-black"}
        >
            <ServiceDetail />
            <div className={"related-contents"}>
                <RelatedContents contentType={"services"} />
            </div>
        </section>
    );
};

export default ServiceDetailContent;

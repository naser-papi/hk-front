import React from "react";
import { DetailPageBanner, NoData } from "@/components/molecule";
import { GetEventDetail } from "@/services/events";

const EventDetailBanner = async () => {
    const info = await GetEventDetail();
    if (!info) return <NoData />;
    const imgUrls = info.bannerMedia.map((img) => img.url);
    return (
        <DetailPageBanner
            title={info.title}
            images={imgUrls}
            shortDesc={info.shortDesc}
        />
    );
};

export default EventDetailBanner;

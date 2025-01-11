import React from "react";
import { NoData, VideoPlayer } from "@/components/molecule";
import { GetEventDetail } from "@/services/events";

const EventDetail = async () => {
    const info = await GetEventDetail();
    if (!info) return <NoData />;
    const replacedFontFS =
        info.firstSection?.replace(/font-family:[^;]+;/g, "") || "";
    const replacedFontSS =
        info.secondSection?.replace(/font-family:[^;]+;/g, "") || "";
    return (
        <div className={"content-detail-body"}>
            <p>{info.shortDesc}</p>
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

export default EventDetail;

import React from "react";
import { NoData, VideoPlayer } from "@/components/molecule";
import { GetEventDetail } from "@/services/events";
import { normalizeHTMLContent } from "@/helpers";

const EventDetail = async () => {
    const info = await GetEventDetail();
    if (!info) return <NoData />;
    const replacedFontFS = normalizeHTMLContent(info.firstSection);
    const replacedFontSS = normalizeHTMLContent(info.secondSection);
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

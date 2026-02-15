import { VideoPlayer } from "@/components/molecule";
import { normalizeHTMLContent } from "@/helpers";
import { EventDto } from "@/types/dto";
import { HtmlViewer } from "@/components/atom";

interface EventDetailProps {
    info: EventDto;
}
const EventDetail = async ({ info }: EventDetailProps) => {
    const replacedFontFS = normalizeHTMLContent(info.firstSection);
    const replacedFontSS = normalizeHTMLContent(info.secondSection);
    return (
        <div className={"content-detail-body"}>
            <h3>{info.shortDesc}</h3>
            <HtmlViewer content={replacedFontFS} />
            <VideoPlayer url={info.videoUrl} />
            <HtmlViewer content={replacedFontSS} />
        </div>
    );
};

export default EventDetail;

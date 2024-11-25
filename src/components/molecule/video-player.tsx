import { getYouTubeVideoId } from "@/helpers";

interface VideoPlayerProps {
    url: string | undefined;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
    if (!url) return null;
    const id = getYouTubeVideoId(url);
    return (
        <div className={"relative w-full min-w-[320px] pb-[56.25%]"}>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className={"absolute left-0 top-0 h-full w-full"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;

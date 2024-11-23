interface VideoPlayerProps {
    url: string;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
    return (
        <div className={"relative h-0 pb-[56.25%]"}>
            <iframe
                src={url}
                className={"absoulte left-0 top-0 h-full w-full"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;

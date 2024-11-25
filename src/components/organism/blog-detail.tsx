import { GetBlogDetail } from "@/services/blogs";
import { NoData, VideoPlayer } from "@/components/molecule";

const BlogDetail = async () => {
    const info = await GetBlogDetail();
    if (!info) return <NoData />;
    return (
        <div className={"content-detail-body"}>
            <h3>{info.subTitle}</h3>
            <article
                dangerouslySetInnerHTML={{ __html: info.firstSection }}
            ></article>
            <VideoPlayer url={info.videoUrl} />
            <article
                dangerouslySetInnerHTML={{ __html: info.secondSection }}
            ></article>
        </div>
    );
};

export default BlogDetail;

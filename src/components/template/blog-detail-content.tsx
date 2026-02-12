import { BlogDetail } from "@/components/organism";
import { GetBlogDetail } from "@/services/blogs";
import { NoData } from "@/components/molecule";
import { DetailContentHeader } from "@/components/template";
import { LabelValue } from "@/types/base";
import trans from "@/helpers/i18n/server";
import { formatPublishDateString } from "@/helpers";
const BlogDetailContent = async () => {
    const info = await GetBlogDetail();
    if (!info) return <NoData />;
    const meta: LabelValue[] = [
        {
            label: trans("common.author"),
            value: info.author,
            meta: {
                hide: true,
            },
        },
        {
            label: trans("common.publishDate"),
            value: formatPublishDateString(info.publishedAt),
        },
        {
            label: trans("common.readTime"),
            value: `${info.readTime} ${trans("common.min")}`,
        },
        {
            label: trans("common.category"),
            value: info.category?.title || "",
        },
        {
            label: trans("common.keywords"),
            value: info.keywords,
            meta: {
                hide: true,
            },
        },
    ];
    return (
        <section id={"blog-detail-content"}
            style={{ marginTop: '-200px', marginLeft: 'auto', 
                marginRight: 'auto', marginBottom: '16px', backgroundColor: 'rgba(255,255,255,0.8)', zIndex: 20  }}
            className={"template text-black folded_corner"}>
                <DetailContentHeader title={info.title} meta={meta} />
            <BlogDetail info={info} />
        </section>
    );
};

export default BlogDetailContent;

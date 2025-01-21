import { GetBlogDetail } from "@/services/blogs";
import { DetailPageBanner, NoData } from "@/components/molecule";
import { LabelValue } from "@/types/base";
import trans from "@/helpers/i18n/server";
import { formatPublishDateString } from "@/helpers";

const BlogDetailBanner = async () => {
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
        <DetailPageBanner
            title={info.title}
            images={[info.bannerMedia.url]}
            meta={meta}
        />
    );
};

export default BlogDetailBanner;

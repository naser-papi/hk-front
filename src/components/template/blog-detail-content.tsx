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
        <section
            id={"blog-detail-content"}
            className={
                "template xs:folded-corner z-20 mx-auto mb-[100px] mt-[-50px] !bg-white text-black sm:mt-[-100px] lg:mt-[-200px]"
            }
        >
            <DetailContentHeader title={info.title} meta={meta} />
            <BlogDetail info={info} />
        </section>
    );
};

export default BlogDetailContent;

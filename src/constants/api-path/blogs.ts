import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

const BlogsPopulateQuery =
    "populate[cardImage][fields][0]=url&populate[bannerMedia][fields][0]=url&populate[category][fields][0]=title";
const BlogsFieldsQuery =
    "fields[0]=title&fields[1]=subTitle&fields[2]=shortDesc&fields[3]=readTime";
export const BlogsAPIPath = {
    getRelatedContents: {
        url: "api/blogs/related-contents/{uuid}",
        method: "GET",
        params: {
            uuid: "",
        },
    },
    getTopBlogs: {
        method: "GET",
        url: "api/blogs?" + BlogsPopulateQuery + "&" + TopEntityQuery,
        options: {
            cache: "no-cache",
        },
    },
    getBlogList: {
        method: "GET",
        url: "api/blogs?" + BlogsPopulateQuery + "&" + BlogsFieldsQuery,
        options: {
            cache: "no-cache",
        },
    },
    getBlogDetail: {
        method: "GET",
        url: "api/blogs/{uuid}?" + BlogsPopulateQuery,
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };

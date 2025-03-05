import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

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
        url: `api/blogs?populate[0]=cardImage&populate[1]=bannerMedia&${TopEntityQuery}`,
        options: {
            cache: "force-cache",
        },
    },
    getBlogList: {
        method: "GET",
        url: "api/blogs?populate[0]=cardImage&populate[1]=bannerMedia&populate[2]=category",
    },
    getBlogDetail: {
        method: "GET",
        url: "api/blogs/{uuid}?populate[0]=cardImage&populate[1]=bannerMedia&populate[2]=category",
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };

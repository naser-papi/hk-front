import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const BlogsAPIPath = {
    getTopBlogs: {
        method: "GET",
        url: `api/blogs?populate[0]=cardImage&populate[1]=bannerMedia&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
    getBlogList: {
        method: "GET",
        url: "api/blogs?populate[0]=cardImage&populate[1]=bannerMedia",
        options: {
            next: { revalidate: 3600 },
        },
    },
    getBlogDetail: {
        method: "GET",
        url: "api/blogs/{uuid}?populate[0]=cardImage&populate[1]=bannerMedia&populate[2]=category",
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };

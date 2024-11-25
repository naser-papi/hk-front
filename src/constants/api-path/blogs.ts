import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const BlogsAPIPath = {
    getTopBlogs: {
        isCms: true,
        method: "GET",
        url: `api/blogs?populate[0]=cardImage&populate[1]=bannerMedia&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
    getBlogList: {
        isCms: true,
        method: "GET",
        url: "api/blogs?populate[0]=cardImage&populate[1]=bannerMedia",
        options: {
            next: { revalidate: 3600 },
        },
    },
    getBlogDetail: {
        isCms: true,
        method: "GET",
        url: "api/blogs/{uuid}?populate[0]=cardImage&populate[1]=bannerMedia&populate[2]=category",
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };

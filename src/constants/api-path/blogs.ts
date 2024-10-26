import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const BlogsAPIPath = {
    getTopBlogs: {
        isCms: true,
        method: "GET",
        url: `api/blogs?populate=cardImage&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
} satisfies { [key: string]: IAPIInfo };

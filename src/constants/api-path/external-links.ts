import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const LinksAPIPath = {
    getTopLinks: {
        isCms: true,
        method: "GET",
        url: `api/links?populate=icon&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
} satisfies { [key: string]: IAPIInfo };

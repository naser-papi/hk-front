import { IAPIInfo } from "@/types/base";

export const CompanyInfoAPIPath = {
    getCompanyInfo: {
        method: "GET",
        url: `api/company-info?populate[logo][fields][0]=url&populate[backgrounds][fields][0]=url`,
        options: {
            cache: "no-cache",
        },
    },
} satisfies { [key: string]: IAPIInfo };

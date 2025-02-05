import { IAPIInfo } from "@/types/base";

export const CompanyInfoAPIPath = {
    getCompanyInfo: {
        method: "GET",
        url: `api/company-info?populate[0]=logo&populate[1]=backgrounds`,
    },
} satisfies { [key: string]: IAPIInfo };

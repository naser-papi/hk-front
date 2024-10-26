import { IAPIInfo } from "@/types/base";

export const CompanyInfoAPIPath = {
    getCompanyInfo: {
        isCms: true,
        method: "GET",
        url: `api/company-info?populate=logo`,
    },
} satisfies { [key: string]: IAPIInfo };

import { IAPIInfo } from "@/types/base";

export const CompanyInfoAPIPath = {
    getCompanyInfo: {
        method: "GET",
        url: `api/company-info?populate=logo`,
    },
} satisfies { [key: string]: IAPIInfo };

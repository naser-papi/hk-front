import { CompanyInfoAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSApiResponse } from "@/types/base";
import { CompanyInfoDto } from "@/types/dto";

export const GetCompanyInfo = async () => {
    const apiInfo = CompanyInfoAPIPath.getCompanyInfo;
    const resp = await mainCall<ICMSApiResponse<CompanyInfoDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return {} as CompanyInfoDto;
    }
};

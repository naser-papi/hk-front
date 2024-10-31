import { GetCompanyInfo } from "@/services/company-info";

const CopyRight = async () => {
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo) return null;
    return (
        <span className={"my-10 block text-center"}>
            {companyInfo.copyright}
        </span>
    );
};

export default CopyRight;

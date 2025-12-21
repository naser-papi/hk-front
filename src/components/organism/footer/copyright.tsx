import { GetCompanyInfo } from "@/services/company-info";

const CopyRight = async () => {
    const companyInfo = await GetCompanyInfo();

    if (!companyInfo) return null;
    return (
        <span className={"copyright my-5 block text-center"}>
            {companyInfo.copyright || "Copyright © 2025 All rights reserved."}
        </span>
    );
};

export default CopyRight;

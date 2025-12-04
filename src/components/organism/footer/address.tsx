import { LinkIcon } from "@/components/atom";
import { FaLocationDot } from "react-icons/fa6";
import { isRootPath } from "@/services/server";
import { GetCompanyInfo } from "@/services/company-info";

const Address = async () => {
    if (!(await isRootPath())) return null;
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo) return null;
    return (
        <section className={"flex items-center gap-4"}>
            <LinkIcon
                icon={FaLocationDot}
                href={`tel:${companyInfo.phoneNo1}`}
                className={"row-span-2"}
            />
            <span>{companyInfo.address}</span>
        </section>
    );
};

export default Address;

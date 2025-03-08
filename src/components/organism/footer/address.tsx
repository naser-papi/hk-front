import { LinkIcon } from "@/components/atom";
import { faMapLocationDot } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import { isRootPath } from "@/services/server";
import { GetCompanyInfo } from "@/services/company-info";

const Address = async () => {
    if (!(await isRootPath())) return null;
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo) return null;
    return (
        <section className={"flex items-center gap-4"}>
            <LinkIcon
                icon={faMapLocationDot}
                href={`tel:${companyInfo.phoneNo1}`}
                className={"row-span-2"}
            />
            <span>{companyInfo.address}</span>
        </section>
    );
};

export default Address;

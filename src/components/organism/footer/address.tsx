import { LinkIcon } from "@/components";
import { faMapLocationDot } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import { GetCompanyInfo } from "@/services/company-info";

const Address = async () => {
    const companyInfo = await GetCompanyInfo();
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

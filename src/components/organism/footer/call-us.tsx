import { FaPhoneVolume } from "react-icons/fa6";
import { LinkIcon } from "@/components/atom";
import trans from "@/helpers/i18n/server";
import { isRootPath } from "@/services/server";
import { GetCompanyInfo } from "@/services/company-info";

const CallUs = async () => {
    if (!(await isRootPath())) return null;
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo) return null;
    return (
        <section
            className={
                "grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-4"
            }
        >
            <LinkIcon
                icon={FaPhoneVolume}
                href={`tel:${companyInfo.phoneNo1}`}
                className={"row-span-2"}
            />
            <span className={"text-secondary"}>{trans("common.callUs")}</span>
            <strong>{companyInfo.phoneNo1}</strong>
        </section>
    );
};

export default CallUs;

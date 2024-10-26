import { faPhoneVolume } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import { LinkIcon } from "@/components";
import { GetCompanyInfo } from "@/services/company-info";

const CallUs = async () => {
    const companyInfo = await GetCompanyInfo();
    return (
        <section
            className={
                "grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-4"
            }
        >
            <LinkIcon
                icon={faPhoneVolume}
                href={`tel:${companyInfo.phoneNo1}`}
                className={"row-span-2"}
            />
            <span className={"text-secondary"}>Any Question? Call us</span>
            <strong>{companyInfo.phoneNo1}</strong>
        </section>
    );
};

export default CallUs;

import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { LinkIcon } from "@/components/atom";
import trans from "@/helpers/i18n/server";
import { NoData } from "@/components/molecule";
import { GetCompanyInfo } from "@/services/company-info";

const Socials = async () => {
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo || !Object.entries(companyInfo).length) return <NoData />;
    return (
        <section className={"socials grid place-items-center gap-y-2"}>
            <span className={"text-secondary"}>
                {trans("common.anyQuestion")}
            </span>
            <div
                className={
                    "flex w-full items-center justify-between text-white"
                }
            >
                <LinkIcon
                    icon={FaInstagram}
                    href={companyInfo.instaLink}
                    key={"insta"}
                />
                <LinkIcon
                    icon={FaTelegram}
                    href={companyInfo.telegramLink}
                    key={"telegram"}
                />
                <LinkIcon
                    icon={FaYoutube}
                    href={companyInfo.youtubeLink}
                    key={"youtube"}
                />
                <LinkIcon
                    icon={FaWhatsapp}
                    href={companyInfo.whatsappLink}
                    key={"whatsapp"}
                />
            </div>
        </section>
    );
};

export default Socials;

import { LinkIcon } from "@/components/atom";
import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { isRootPath } from "@/services/server";
import { GetCompanyInfo } from "@/services/company-info";
import trans from "@/helpers/i18n/server";

const ContactUs = async () => {
    if (!(await isRootPath())) return null;
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo) return null;
    return (
        <section className="footer-contact">
            <h3 className="text-xl font-bold text-white mb-4">
                {trans("common.contactUs")}
            </h3>
            <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                    <LinkIcon
                        icon={FaLocationDot}
                        href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                        className="text-white flex-shrink-0 mt-1"
                    />
                    <span className="text-white">{companyInfo.address}</span>
                </li>
                <li className="flex items-center gap-3">
                    <LinkIcon
                        icon={FaPhoneVolume}
                        href={`tel:${companyInfo.phoneNo1}`}
                        className="text-white flex-shrink-0"
                    />
                    <a
                        href={`tel:${companyInfo.phoneNo1}`}
                        className="text-white hover:text-orange-400 transition-colors"
                    >
                        {companyInfo.phoneNo1}
                    </a>
                </li>
                {companyInfo.supportEmail && (
                    <li className="flex items-center gap-3">
                        <LinkIcon
                            icon={FaEnvelope}
                            href={`mailto:${companyInfo.supportEmail}`}
                            className="text-white flex-shrink-0"
                        />
                        <a
                            href={`mailto:${companyInfo.supportEmail}`}
                            className="text-white hover:text-orange-400 transition-colors"
                        >
                            {companyInfo.supportEmail}
                        </a>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default ContactUs;

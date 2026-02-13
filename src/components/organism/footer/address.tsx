import { LinkIcon } from "@/components/atom";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { GetCompanyInfo } from "@/services/company-info";
import trans from "@/helpers/i18n/server";

const ContactUs = async () => {
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo) return null;
    return (
        <section className="footer-contact">
            <h3 className="mb-4 text-xl font-bold text-white">
                {trans("common.contactUs")}
            </h3>
            <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                    <LinkIcon
                        icon={FaLocationDot}
                        href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                        className="mt-1 flex-shrink-0 text-white"
                    />
                    <span className="text-white">{companyInfo.address}</span>
                </li>
                <li className="flex items-center gap-3">
                    <LinkIcon
                        icon={FaPhoneVolume}
                        href={`tel:${companyInfo.phoneNo1}`}
                        className="flex-shrink-0 text-white"
                    />
                    <a
                        href={`tel:${companyInfo.phoneNo1}`}
                        className="text-white transition-colors hover:text-orange-400"
                    >
                        {companyInfo.phoneNo1}
                    </a>
                </li>
                {companyInfo.supportEmail && (
                    <li className="flex items-center gap-3">
                        <LinkIcon
                            icon={FaEnvelope}
                            href={`mailto:${companyInfo.supportEmail}`}
                            className="flex-shrink-0 text-white"
                        />
                        <a
                            href={`mailto:${companyInfo.supportEmail}`}
                            className="text-white transition-colors hover:text-orange-400"
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

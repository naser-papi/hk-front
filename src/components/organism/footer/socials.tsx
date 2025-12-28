import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube, FaSquareInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { LinkIcon } from "@/components/atom";
import trans from "@/helpers/i18n/server";
import { NoData } from "@/components/molecule";
import { GetCompanyInfo } from "@/services/company-info";

const Socials = async () => {
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo || !Object.entries(companyInfo).length) return <NoData />;
    
    // Map available social links - use existing ones or create placeholders
    const socialLinks = [
        { icon: FaSquareInstagram, href: companyInfo.instaLink || "#", key: "instagram" },
        { icon: FaTelegram, href: companyInfo.telegramLink || "#", key: "telegram" },
        { icon: FaYoutube, href: companyInfo.youtubeLink || "#", key: "youtube" },
        { icon: FaWhatsapp, href: companyInfo.whatsappLink || "#", key: "whatsapp" },
    ];

    return (
        <section className="footer-socials">
            <h3 className="text-xl font-bold text-white mb-4">
                {trans("common.followUs")}
            </h3>
            <p className="text-white text-sm mb-4">
                {trans("common.stayConnectedSocialMedia")}
            </p>
            <div className="flex items-center gap-8 justify-center">
                {socialLinks.map((social) => (
                    <LinkIcon
                        key={social.key}
                        icon={social.icon}
                        href={social.href}
                        className="text-white hover:text-orange-400 transition-colors text-6xl"
                    />
                ))}
            </div>
        </section>
    );
};

export default Socials;

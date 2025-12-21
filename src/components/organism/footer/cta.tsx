"use client";
import useTranslation from "@/helpers/i18n/use-translation";

const CTA = () => {
    const { t } = useTranslation();
    
    const scrollToForm = () => {
        const form = document.querySelector(".contact-form");
        if (form) {
            form.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div id="cta" className="footer-cta bg-secondary py-12 px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("common.readyToStartJourney")}
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                {t("common.ctaDescription")}
            </p>
            <button
                onClick={scrollToForm}
                className="inline-block bg-white text-secondary hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer"
            >
                {t("common.getFreeConsultation")}
            </button>
        </div>
    );
};

export default CTA;


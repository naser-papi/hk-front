import trans from "@/helpers/i18n/server";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="footer-cta bg-secondary py-12 px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {trans("common.readyToStartJourney")}
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                {trans("common.ctaDescription")}
            </p>
            <Link
                href="/#contact"
                className="inline-block bg-white text-secondary hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
                {trans("common.getFreeConsultation")}
            </Link>
        </section>
    );
};

export default CTA;


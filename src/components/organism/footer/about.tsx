import { NoData } from "@/components/molecule";
import { GetCompanyInfo } from "@/services/company-info";
import trans from "@/helpers/i18n/server";
import { HtmlViewer } from "@/components/atom";

const About = async () => {
    const companyInfo = await GetCompanyInfo();

    if (!companyInfo || !Object.entries(companyInfo).length) return <NoData />;
    return (
        <section className="footer-about">
            <h3 className="mb-4 text-xl font-bold text-white">
                {trans("common.aboutHollandKade")}
            </h3>
            <HtmlViewer content={companyInfo.about} />
            <p className="text-sm text-white">
                {trans("common.over10YearsExperience")}
            </p>
        </section>
    );
};

export default About;

import { ImageKit } from "@/components/atom";
import { NoData } from "@/components/molecule";
import { normalizeHTMLContent } from "@/helpers";
import { isRootPath } from "@/services/server";
import { GetCompanyInfo } from "@/services/company-info";
import trans from "@/helpers/i18n/server";

const About = async () => {
    const isRoot = await isRootPath();
    if (!isRoot) return null;
    const companyInfo = await GetCompanyInfo();

    if (!companyInfo || !Object.entries(companyInfo).length) return <NoData />;
    return (
        <section className="footer-about">
            <h3 className="text-xl font-bold text-white mb-4">
                {trans("common.aboutHollandKade")}
            </h3>
            <article
                className="text-white text-sm leading-relaxed mb-3"
                dangerouslySetInnerHTML={{
                    __html: normalizeHTMLContent(companyInfo.about),
                }}
            ></article>
            <p className="text-white text-sm">
                {trans("common.over10YearsExperience")}
            </p>
        </section>
    );
};

export default About;

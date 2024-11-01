import { GetCompanyInfo } from "@/services/company-info";
import { ImageKit } from "@/components";
import NoData from "@/components/organism/no-data";

const About = async () => {
    const companyInfo = await GetCompanyInfo();
    if (!companyInfo || !Object.entries(companyInfo).length) return <NoData />;
    return (
        <section
            className={
                "grid grid-cols-[52px_auto] items-center gap-x-2 gap-y-2"
            }
        >
            <ImageKit
                src={companyInfo.logo.url}
                alt={companyInfo.title}
                width={48}
                height={48}
            />
            <h3 className={"text-2xl font-bold text-cyan"}>
                {companyInfo.title}
            </h3>
            <article
                className={"col-span-2 text-base text-white"}
                dangerouslySetInnerHTML={{ __html: companyInfo.about }}
            ></article>
        </section>
    );
};

export default About;

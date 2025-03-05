import HomePageStore, { CacheKeys } from "@/services/home-page-store";
import { ImageKit } from "@/components/atom";
import { NoData } from "@/components/molecule";
import { normalizeHTMLContent } from "@/helpers";
import { isRootPath } from "@/services/server";
import { CompanyInfoDto } from "@/types/dto";

const About = async () => {
    const isRoot = await isRootPath();
    if (!isRoot) return null;
    const companyInfo = (await HomePageStore.getInstance().getValue(
        CacheKeys.companyInfo
    )) as CompanyInfoDto;

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
                dangerouslySetInnerHTML={{
                    __html: normalizeHTMLContent(companyInfo.about),
                }}
            ></article>
        </section>
    );
};

export default About;

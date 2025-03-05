import HomePageStore, { CacheKeys } from "@/services/home-page-store";

const CopyRight = async () => {
    const companyInfo = await HomePageStore.getInstance().getValue(
        CacheKeys.companyInfo
    );

    if (!companyInfo) return null;
    return (
        <span className={"my-5 block text-center"}>
            {companyInfo.copyright}
        </span>
    );
};

export default CopyRight;

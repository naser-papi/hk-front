import HomePageStore, { CacheKeys } from "@/services/home-page-store";
import {
    faInstagram,
    faTelegram,
    faWhatsapp,
    faYoutube,
} from "@awesome.me/kit-8b348a8267/icons/classic/brands";
import { LinkIcon } from "@/components/atom";
import trans from "@/helpers/i18n/server";
import { NoData } from "@/components/molecule";

const Socials = async () => {
    const companyInfo = await HomePageStore.getInstance().getValue(
        CacheKeys.companyInfo
    );
    if (!companyInfo || !Object.entries(companyInfo).length) return <NoData />;
    return (
        <section className={"socials grid place-items-center gap-y-2"}>
            <span className={"text-secondary"}>
                {trans("common.anyQuestion")}
            </span>
            <div
                className={
                    "flex w-full items-center justify-between text-white"
                }
            >
                <LinkIcon
                    icon={faInstagram}
                    href={companyInfo.instaLink}
                    key={"insta"}
                />
                <LinkIcon
                    icon={faTelegram}
                    href={companyInfo.telegramLink}
                    key={"telegram"}
                />
                <LinkIcon
                    icon={faYoutube}
                    href={companyInfo.youtubeLink}
                    key={"youtube"}
                />
                <LinkIcon
                    icon={faWhatsapp}
                    href={companyInfo.whatsappLink}
                    key={"whatsapp"}
                />
            </div>
        </section>
    );
};

export default Socials;

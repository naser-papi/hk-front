"use client";
import { FabIconButton } from "@/components/atom";
import { faShare } from "@awesome.me/kit-026a927a83/icons/classic/solid";
import useTranslation from "@/helpers/i18n/use-translation";

const ShareButton = () => {
    const { t } = useTranslation();
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    text: "Check out this page!",
                    url: window.location.href,
                });
                console.log("Successfully shared!");
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            alert("Web Share API is not supported in your browser.");
        }
    };

    return (
        <FabIconButton
            onClick={handleShare}
            icon={faShare}
            label={"Share"}
            title={t("common.share")}
            hideLabel
        />
    );
};

export default ShareButton;

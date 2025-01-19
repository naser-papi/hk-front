import enTranslation from "@/constants/locale/en";
import faTranslation from "@/constants/locale/fa";

export const LanguageResources = {
    en: {
        translation: enTranslation,
    },
    fa: {
        translation: faTranslation,
    },
};

export const fallbackLng = "fa";
export const languages = [fallbackLng, "en"];
export const defaultNS = "translation";
export const i18nCookieName = "NEXT_LOCALE_NEW";
export const i18nHeaderName = " x-next-i18n-router-locale";

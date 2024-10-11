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

export const fallbackLng = "en";
export const languages = [fallbackLng, "fa"];
export const defaultNS = "translation";
export const i18nCookieName = "NEXT_LOCALE";

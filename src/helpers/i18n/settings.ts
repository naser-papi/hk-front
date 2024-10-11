import { LanguageResources, fallbackLng, defaultNS } from "@/constants/locale";
import { LanguageName } from "@/types/base";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        debug: false,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: LanguageResources,
    };
}

export const SupportedLanguageList: {
    label: string;
    icon: string;
    key: LanguageName;
    direction: "rtl" | "ltr";
}[] = [
    {
        label: "English",
        icon: "fa-regular fa-language",
        key: "en",
        direction: "ltr",
    },
    {
        label: "فارسی",
        icon: "fa-regular fa-language",
        key: "fa",
        direction: "rtl",
    },
];

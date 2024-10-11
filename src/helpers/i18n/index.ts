import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import { TransFuntion } from "@/types/base";

const initI18next = (lng: string, ns?: string) => {
    const i18nInstance = createInstance();
    i18nInstance.use(initReactI18next).init(getOptions(lng, ns)).then();
    return i18nInstance;
};

export function useTranslation(lng: string) {
    const i18nextInstance = initI18next(lng);
    return {
        t: i18nextInstance.getFixedT(lng) as TransFuntion,
        i18n: i18nextInstance,
    };
}

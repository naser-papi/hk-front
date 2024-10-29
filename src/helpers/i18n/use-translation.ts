"use client";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import { TransFuntion } from "@/types/base";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "@/helpers/i18n/settings";

const initI18next = (lng: string, ns?: string) => {
    const i18nInstance = createInstance();
    i18nInstance.use(initReactI18next).init(getOptions(lng, ns)).then();
    return i18nInstance;
};

const useTranslation = (lng = "") => {
    const locale = useCurrentLocale(i18nConfig);
    if (!lng) {
        lng = locale || "en";
    }
    const i18nextInstance = initI18next(lng);
    return {
        t: i18nextInstance.getFixedT(lng) as TransFuntion,
        i18n: i18nextInstance,
    };
};
export default useTranslation;

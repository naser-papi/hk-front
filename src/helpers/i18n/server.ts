"use server";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import { LocaleType, NestedKeyOf, TransFuntion } from "@/types/base";
import { GetLocaleFromCookie } from "@/services/common";

const initI18next = (lng: string, ns?: string) => {
    const i18nInstance = createInstance();
    i18nInstance.use(initReactI18next).init(getOptions(lng, ns)).then();
    return i18nInstance;
};
const trans = (path: NestedKeyOf<LocaleType>) => {
    const local = GetLocaleFromCookie();
    const i18nextInstance = initI18next(local);
    const t = i18nextInstance.getFixedT(local) as TransFuntion;
    return t(path);
};

export default trans;

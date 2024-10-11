import enTranslation from "@/constants/locale/en";
import { LanguageResources } from "@/constants/locale";

export type DtoType = {
    [key in string]: string | number | boolean | number[] | undefined | null;
};
export type TransFuntion = (
    path: NestedKeyOf<LocaleType>,
    config?: any
) => string;
export type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType &
        (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`;
}[keyof ObjectType & (string | number)];

export type StringKeys<T> = {
    [P in keyof T]: T[P] extends string ? P : never;
}[keyof T];

export type LocaleKey = NestedKeyOf<LocaleType>;

export type Params = {
    [key: string]: string | number;
};
export type SortType = "asc" | "desc";
export interface IAPIResponse<T> {
    status: number;
    data?: T;
    error?: string;
}

export type LanguageName = keyof typeof LanguageResources;

export type LocaleType = typeof enTranslation; //en is default

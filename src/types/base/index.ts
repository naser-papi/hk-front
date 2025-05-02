import enTranslation from "@/constants/locale/en";
import { LanguageResources } from "@/constants/locale";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { HTTP_METHOD } from "next/dist/server/web/http";

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

export type LanguageName = keyof typeof LanguageResources;

export type LocaleType = typeof enTranslation; //en is default

export type Direction = "both" | "left" | "right" | "none";

export type IParams = {
    [key: string]: string | number;
};
export type FormInputValue = string | number | string[] | undefined | boolean;

export interface IConfirm {
    title: string;
    content: JSX.Element;
    onConfirm: () => void;
    onCancel: () => void;
    size?: "small" | "medium" | "large";
}

export interface IAlert {
    type: "success" | "error" | "warn" | "info";
    message: string;
    closable?: boolean;
}
export interface ILocalStorageInfo {
    token?: {
        access: string;
        refresh: string;
    };
}

export interface IMenuLink {
    title: NestedKeyOf<LocaleType>;
    icon: IconDefinition;
    path: string;
    id: string;
    isActive?: boolean;
}

interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface IMeta {
    pagination: IPagination;
}

export interface ICMSListApiResponse<T> {
    data: T[];
    meta: IMeta;
}

export interface ICMSApiResponse<T> {
    data: T;
}
export interface IAPIResponse<T> {
    status: number;
    data?: T;
    error?: string;
}

export interface IAPIInfo {
    url: string;
    method: HTTP_METHOD;
    body?: any;
    tokenLess?: boolean;
    params?: IParams;
    query?: IParams;
    options?: RequestInit;
}

export interface IFormInput {
    name: string;
    defaultValue: string | number | string[] | undefined;
    type: "text" | "password" | "textarea";
    label: string;
    placeholder?: string;
}

export interface KeyText {
    key: number;
    text: string;
}

export interface LabelValue {
    label: string;
    value: string | number;
    meta?: {
        [key: string]: boolean | number | string;
    };
}

export interface IUserInfo {
    telegramId: string;
    email: string;
    fullName: string;
    avatar?: string;
    memberDocumentId: string;
}

export interface ICalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    href: string;
}

export type ViewTypes = "CardList" | "MapView" | "CalendarView";

export type RepeatType =
    | "None"
    | "Daily"
    | "Weekly"
    | "EveryOtherWeek"
    | "Monthly"
    | "Yearly";

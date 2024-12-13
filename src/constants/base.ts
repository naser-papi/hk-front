import { IMenuLink } from "@/types/base";
import {
    faCalendarDays,
    faHandshakeAngle,
    faInfo,
    faLink,
    faMessageText,
    faNotebook,
} from "@awesome.me/kit-026a927a83/icons/classic/solid";

export const GlobalKeys = {
    localStorageInfo: "HK_APP_INFO",
};

export const MenuLinks: IMenuLink[] = [
    {
        title: "common.services",
        icon: faHandshakeAngle,
        path: "/#services",
        id: "services",
    },
    {
        title: "common.posts",
        icon: faNotebook,
        path: "/#blogs",
        id: "posts",
    },
    {
        title: "common.events",
        icon: faCalendarDays,
        path: "/#events",
        id: "events",
    },
    {
        title: "common.links",
        icon: faLink,
        path: "/#links",
        id: "links",
    },
    {
        title: "common.contactUs",
        icon: faMessageText,
        path: "/#contact",
        id: "contact",
    },
    {
        title: "common.aboutUs",
        icon: faInfo,
        path: "/#about",
        id: "about",
    },
];

export const TopEntityQuery =
    "pagination[page]=1&pagination[pageSize]=4&sort[0]=id:desc";

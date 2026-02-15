import { IMenuLink } from "@/types/base";
import {
    FaBookOpen,
    FaCalendarDays,
    FaGaugeHigh,
    FaHandshakeAngle,
    FaInfo,
    FaLink,
    FaMessage,
} from "react-icons/fa6";

export const GlobalKeys = {
    localStorageInfo: "HK_APP_INFO",
};

export const MenuLinks: IMenuLink[] = [
    {
        title: "common.posts",
        icon: FaBookOpen,
        path: "/#blogs",
        id: "posts",
    },
    {
        title: "common.services",
        icon: FaHandshakeAngle,
        path: "/#services",
        id: "services",
    },
    {
        title: "common.events",
        icon: FaCalendarDays,
        path: "/#events",
        id: "events",
    },
    {
        title: "common.links",
        icon: FaLink,
        path: "/#links",
        id: "links",
    },
    {
        title: "common.contactUs",
        icon: FaMessage,
        path: "/#contact",
        id: "contact",
    },
    {
        title: "common.aboutUs",
        icon: FaInfo,
        path: "/#about",
        id: "about",
    },
    {
        title: "common.dashboard",
        icon: FaGaugeHigh,
        path: "/dashboard",
        id: "Dashboard",
    },
];

export const TopEntityQuery =
    "pagination[page]=1&pagination[pageSize]=4&sort[0]=id:desc";
export const Top10EntityQuery =
    "pagination[page]=1&pagination[pageSize]=10&sort[0]=id:desc";

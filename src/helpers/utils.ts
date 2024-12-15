import { Direction, ILocalStorageInfo, IParams } from "@/types/base";
import { GlobalKeys } from "@/constants/base";

export const clearTokensFormAppLocalStorage = () => {
    const exist = getAppLocalStorage() as ILocalStorageInfo;
    if (exist && exist.hasOwnProperty("token")) {
        delete exist.token;
    }
    localStorage.setItem(GlobalKeys.localStorageInfo, JSON.stringify(exist));
    document.cookie =
        "hkAuthToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
export const setTokensToAppLocalStorage = (token: string) => {
    const exist =
        getAppLocalStorage() ??
        ({ token: { access: token, refresh: token } } as ILocalStorageInfo);
    exist.token = { access: token, refresh: token };
    localStorage.setItem(GlobalKeys.localStorageInfo, JSON.stringify(exist));
    document.cookie = `hkAuthToken=${token}; path=/; expires=${new Date(Date.now() + 86400000).toUTCString()};`;
};

export const getAppLocalStorage = () => {
    const value = localStorage.getItem(GlobalKeys.localStorageInfo);
    if (value) {
        return JSON.parse(value) as ILocalStorageInfo;
    }
    return null;
};

export function isValidEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function isValidTelegramID(username: string) {
    const telegramRegex = /^@[a-zA-Z0-9_]{5,32}$/;
    return telegramRegex.test(username);
}
export function getYouTubeVideoId(url: string): string | null {
    const regex =
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

export function getNavDirection(count: number, index: number): Direction {
    if (count === 1) return "none";
    if (count > 1 && index === 0) return "right";
    if (index === count - 1) return "left";
    return "both";
}

export function formatPublishDateString(dateString: string | undefined) {
    if (!dateString) return "";
    const date = new Date(dateString);

    // Define options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "2-digit",
    };

    return date.toLocaleDateString("en-US", options);
}
export function formatEventDate(date: string): string {
    if (!date) return "";
    const process = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    return process.toLocaleString("en-US", options).replace(", ", " - ");
}

export function getStrapiPaginationQuery(page: number, pageSize: number) {
    return `&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=id:desc`;
}

export function replaceParams(urlTemplate: string, params: IParams): string {
    // Regular expression to match placeholder patterns like {param1}, {param2}, etc.
    const regex = /{([^}]+)}/g;

    // Replace each placeholder in the URL template with the corresponding value from the params object
    return urlTemplate.replace(regex, (match, paramName) => {
        // Check if the paramName exists in the params object
        if (params.hasOwnProperty(paramName)) {
            // If the paramName exists, replace the placeholder with its corresponding value
            return params[paramName].toString();
        } else {
            // If paramName doesn't exist in params, return the original placeholder
            return match;
        }
    });
}

export function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
export function addQueryParamsToUrl(url: string, queryParams: IParams): string {
    const urlObject = new URL(url, "http://example.com"); // Base URL for parsing

    for (const [key, value] of Object.entries(queryParams)) {
        urlObject.searchParams.append(key, value.toString());
    }

    // Remove the base and return the constructed URL without the leading slash
    return urlObject.pathname.slice(1) + urlObject.search;
}

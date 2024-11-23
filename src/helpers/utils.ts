import { Direction, IParams } from "@/types/base";

export function getNavDirection(count: number, index: number): Direction {
    if (count === 1) return "none";
    if (count > 1 && index === 0) return "right";
    if (index === count - 1) return "left";
    return "both";
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

export function formatEventDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    return date.toLocaleString("en-US", options).replace(", ", " - ");
}

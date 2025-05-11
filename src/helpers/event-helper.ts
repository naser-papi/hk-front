import { EventDto } from "@/types/dto";
import { ICalendarEvent } from "@/types/base";
import { formatSubstring } from "@/helpers/utils";

export function GenerateCalendarEvent(event: EventDto): ICalendarEvent[] {
    const {
        dateAndTime,
        finishDateAndTime,
        repeatType,
        title,
        detailLink,
        documentId,
        eventTimeInDay,
        shortDesc,
    } = event;

    const startDate = new Date(dateAndTime);
    const endDate = new Date(finishDateAndTime);

    // Helper function to add days to a date
    const addDays = (date: Date, days: number): Date => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    // Helper function to add weeks to a date
    const addWeeks = (date: Date, weeks: number): Date => {
        return addDays(date, weeks * 7);
    };

    // Helper function to add months to a date
    const addMonths = (date: Date, months: number): Date => {
        const result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    };

    // Helper function to add years to a date
    const addYears = (date: Date, years: number): Date => {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() + years);
        return result;
    };

    // Helper function to calculate event end time from eventTimeInDay
    const calculateEndDate = (
        start: Date,
        timeInMinutes: number | undefined
    ): Date => {
        const end = new Date(start);
        if (timeInMinutes !== undefined) {
            end.setMinutes(end.getMinutes() + timeInMinutes);
        }
        return end;
    };

    const calendarEvents: ICalendarEvent[] = [];

    // If repeatType is None or undefined, just create a single event
    if (!repeatType || repeatType === "None") {
        calendarEvents.push({
            id: documentId,
            title: formatSubstring(title, 30),
            start: startDate,
            end: calculateEndDate(startDate, eventTimeInDay),
            href: detailLink,
            description: shortDesc,
        });
        return calendarEvents;
    }

    // Populate events depending on the repeatType
    let currentDate = startDate;
    while (currentDate <= endDate) {
        calendarEvents.push({
            id: `${documentId}-${currentDate.getTime()}`, // Add a unique ID for each recurrence
            title: formatSubstring(title, 30),
            start: new Date(currentDate),
            end: calculateEndDate(currentDate, eventTimeInDay), // Use eventTimeInDay for end time
            href: detailLink,
            description: shortDesc,
        });

        switch (repeatType) {
            case "Daily":
                currentDate = addDays(currentDate, 1);
                break;
            case "Weekly":
                currentDate = addWeeks(currentDate, 1);
                break;
            case "EveryOtherWeek":
                currentDate = addWeeks(currentDate, 2);
                break;
            case "Monthly":
                currentDate = addMonths(currentDate, 1);
                break;
            case "Yearly":
                currentDate = addYears(currentDate, 1);
                break;
            default:
                throw new Error(`Unhandled repeat type: ${repeatType}`);
        }
    }

    return calendarEvents;
}

export function generateGoogleCalendarLink(event: EventDto) {
    const { title, finishDateAndTime, dateAndTime, shortDesc, address } = event;

    const startD = encodeURIComponent(new Date(dateAndTime).toISOString());
    const endD = encodeURIComponent(new Date(finishDateAndTime).toISOString());

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
    )}&details=${encodeURIComponent(shortDesc)}&location=${encodeURIComponent(
        address!
    )}&dates=${startD}/${endD}`;
}

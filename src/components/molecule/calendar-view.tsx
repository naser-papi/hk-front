"use client";

import { useState, useMemo, useCallback } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import { ICalendarEvent } from "@/types/base";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./react-big-calendar.css";

// Note: Moment.js is heavy (~70KB). Consider migrating to date-fns or dayjs for better performance.
// This is used by react-big-calendar's momentLocalizer, so migration would require calendar library change.
const localizer = momentLocalizer(moment);

interface CalendarViewProps {
    eventList: ICalendarEvent[];
    onSelectEvent: (event: ICalendarEvent) => void;
}

export default function CalendarView({
    eventList,
    onSelectEvent,
}: CalendarViewProps) {
    // State for controlling the calendar's date and view
    const [date, setDate] = useState(new Date()); // Current date
    const [view, setView] = useState<View>("month"); // Current view (month, week, day, etc.)

    // Memoize event list to prevent unnecessary re-renders
    const memoizedEvents = useMemo(() => eventList, [eventList]);

    // Handle navigation (next/prev buttons)
    const handleNavigate = useCallback((newDate: Date) => {
        setDate(newDate); // Update the date when navigation buttons are clicked
    }, []);

    // Handle view changes (Month, Week, Day)
    const handleViewChange = useCallback((newView: View) => {
        setView(newView); // Update the view (e.g., 'week', 'month', 'day')
    }, []);

    const handleSelectSlot = useCallback((slotInfo: any) => {
        alert(`Time slot selected: ${slotInfo.start.toLocaleString()}`);
    }, []);

    return (
        <div className={"h-[500px] w-full"}>
            <Calendar
                localizer={localizer}
                events={memoizedEvents}
                date={date} // Controlled date
                view={view} // Controlled view
                onNavigate={handleNavigate} // Called when navigation buttons are clicked
                onView={handleViewChange} // Called when view-type buttons are clicked
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectEvent={onSelectEvent}
                onSelectSlot={handleSelectSlot}
                className={"h-full w-full"}
            />
        </div>
    );
}

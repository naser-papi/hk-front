"use client";

import { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import { ICalendarEvent } from "@/types/base";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./react-big-calendar.css";

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

    // Handle navigation (next/prev buttons)
    const handleNavigate = (newDate: Date) => {
        setDate(newDate); // Update the date when navigation buttons are clicked
    };

    // Handle view changes (Month, Week, Day)
    const handleViewChange = (newView: View) => {
        setView(newView); // Update the view (e.g., 'week', 'month', 'day')
    };

    return (
        <div className={"h-[500px] w-full"}>
            <Calendar
                localizer={localizer}
                events={eventList}
                date={date} // Controlled date
                view={view} // Controlled view
                onNavigate={handleNavigate} // Called when navigation buttons are clicked
                onView={handleViewChange} // Called when view-type buttons are clicked
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectEvent={onSelectEvent}
                onSelectSlot={(slotInfo) =>
                    alert(
                        `Time slot selected: ${slotInfo.start.toLocaleString()}`
                    )
                }
                className={"h-full w-full"}
            />
        </div>
    );
}

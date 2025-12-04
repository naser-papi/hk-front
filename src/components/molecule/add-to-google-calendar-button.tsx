"use client";
import { EventDto } from "@/types/dto";
import { Button } from "@/components/atom";
import { useCallback } from "react";
import useTranslation from "@/helpers/i18n/use-translation";
import { generateGoogleCalendarLink } from "@/helpers/event-helper";

interface AddToGoogleCalendarButtonProps {
    event: EventDto;
}

const AddToGoogleCalendarButton = ({
    event,
}: AddToGoogleCalendarButtonProps) => {
    const { t } = useTranslation();
    const addToGoogleCalendar = useCallback(() => {
        const link = generateGoogleCalendarLink(event);
        window.open(link, "_blank");
    }, [event]);
    return (
        <Button
            label={t("common.addToCalendar") + "  "}
            icon={faCalendarDays}
            intend={"secondary"}
            onClick={addToGoogleCalendar}
        />
    );
};

export default AddToGoogleCalendarButton;

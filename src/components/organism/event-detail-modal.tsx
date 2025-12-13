"use client";
import { AddToGoogleCalendarButton, Modal } from "@/components/molecule";
import { ImageKit, LinkButton } from "@/components/atom";
import useTranslation from "@/helpers/i18n/use-translation";
import { useSnapshot } from "valtio/react";
import EventsState from "@/stores/events";
import { formatEventDate } from "@/helpers";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import { EventDto } from "@/types/dto";

const EventDetailModal = () => {
    const { t } = useTranslation();
    const { showDetailsModal } = useSnapshot(EventsState);
    const locale = useCurrentLocale(i18nConfig);
    if (!showDetailsModal) return null;
    return (
        <Modal
            title={t("common.eventDetails")}
            size={"small"}
            isOpen
            onClose={() => (EventsState.showDetailsModal = null)}
            onConfirm={() => {}}
            hideActions
        >
            <div className={"flex flex-col gap-4"}>
                <div className={"relative aspect-[1.7/1] w-full"}>
                    <ImageKit
                        src={showDetailsModal.bannerMedia[0].url}
                        alt={"HollandKade Event"}
                        fill
                    />
                </div>

                <h4>{showDetailsModal.title}</h4>
                <span>
                    {formatEventDate(
                        showDetailsModal.dateAndTime,
                        locale ?? "fa"
                    )}
                </span>
                <section className={"flex w-full justify-between"}>
                    <span>
                        {showDetailsModal.eventType === "InPlace"
                            ? t("common.inPlace")
                            : t("common.online")}
                    </span>
                    <span>
                        {t(`common.repeatType.${showDetailsModal.repeatType}`)}
                    </span>
                </section>
                <p className={"my-3 border-b border-white pb-2"}>
                    {showDetailsModal.shortDesc}
                </p>
                <section
                    className={"my-3 flex w-full flex-col gap-4 text-white"}
                >
                    <AddToGoogleCalendarButton
                        event={showDetailsModal as EventDto}
                    />
                    <LinkButton
                        label={t("common.eventDetails")}
                        href={`/${showDetailsModal.id}`}
                        variant={"primary"}
                        className={"w-full text-center text-white"}
                    />
                </section>
            </div>
        </Modal>
    );
};

export default EventDetailModal;

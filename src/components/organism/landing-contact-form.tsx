"use client";

import { FormEvent, useState } from "react";
import { UserMessageDto } from "@/types/dto/user-message";
import { Button, TextBox } from "@/components/atom";
import { SendNewMessage } from "@/services/user-messages";
import useTranslation from "@/helpers/i18n/use-translation";
import { FormItem } from "../molecule";

const initialState = {
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
} as UserMessageDto;
const LandingContactForm = () => {
    const [info, setInfo] = useState({ ...initialState });
    const { t } = useTranslation();
    const updateDto = (name: string, value: string) => {
        setInfo({ ...info, [name]: value });
    };
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (info.fullName && info.message && (info.email || info.phoneNo)) {
            const resp = await SendNewMessage(info);
            if (resp && resp.id) {
                setInfo({
                    ...initialState,
                });
            }
        }
    };
    return (
        <form
            className={
                "contact-form lg:grid-col-2-gap-4 grid w-full place-items-center gap-y-4 md:text-2xl [&>.hk-text-box]:w-full [&>button]:w-full"
            }
            onSubmit={onSubmit}
        >
            <FormItem label={t("common.fullName")} className="lg:col-span-2">
                <TextBox
                    type={"text"}
                    value={info.fullName}
                    name={"fullName"}
                    key={"fullName"}
                    placeholder={t("common.fullName")}
                    updateDto={updateDto}                    
                />
            </FormItem>
            
            <FormItem label={t("common.email")}>
                <TextBox
                    type={"text"}
                    value={info.email}
                    name={"email"}
                    key={"email"}
                    placeholder={t("common.email")}
                    updateDto={updateDto}
                />
            </FormItem>
            <FormItem label={t("common.phoneNo")}>
                <TextBox
                    type={"text"}
                    value={info.phoneNo}
                    name={"phoneNo"}
                    key={"phoneNo"}
                    updateDto={updateDto}
                    placeholder={t("common.phoneNo")}
                />
            </FormItem>
            <FormItem label={t("common.message")} className="lg:col-span-2">
                <TextBox
                    type={"textarea"}
                    value={info.message}
                    name={"message"}
                    key={"message"}
                    updateDto={updateDto}
                    placeholder={t("common.message")}
                    rows={4}                    
                />
            </FormItem>
            <Button
                label={t("common.sendMessage")}
                variant={"primary"}
                type={"submit"}
                className={"lg:col-span-2"}
            />
        </form>
    );
};

export default LandingContactForm;

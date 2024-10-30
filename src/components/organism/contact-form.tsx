"use client";

import { FormEvent, useState } from "react";
import { UserMessageDto } from "@/types/dto/user-message";
import { Button, TextBox } from "@/components";
import { SendNewMessage } from "@/services/user-messages";

const initialState = {
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
} as UserMessageDto;
const ContactForm = () => {
    const [info, setInfo] = useState({ ...initialState });
    const updateDto = (name: string, value: string) => {
        setInfo({ ...info, [name]: value });
    };
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (info.fullName && info.message && (info.email || info.phoneNo)) {
            const resp = await SendNewMessage(info);
            if (resp && resp.id) {
                console.log("success");
                setInfo({
                    ...initialState,
                });
            }
        }
    };
    return (
        <form
            className={
                "contact-form grid place-items-center gap-y-4 [&>.hk-text-box]:w-full [&>button]:w-full"
            }
            onSubmit={onSubmit}
        >
            <TextBox
                type={"text"}
                value={info.fullName}
                name={"fullName"}
                key={"fullName"}
                placeholder={"Full name"}
                updateDto={updateDto}
            />
            <TextBox
                type={"text"}
                value={info.email}
                name={"email"}
                key={"email"}
                placeholder={"Email"}
                updateDto={updateDto}
            />
            <TextBox
                type={"text"}
                value={info.phoneNo}
                name={"phoneNo"}
                key={"phoneNo"}
                updateDto={updateDto}
                placeholder={"Phone No"}
            />
            <TextBox
                type={"textarea"}
                value={info.message}
                name={"message"}
                key={"message"}
                updateDto={updateDto}
                placeholder={"Message"}
                rows={4}
            />
            <Button
                label={"Send Message"}
                intend={"secondary"}
                type={"submit"}
            />
        </form>
    );
};

export default ContactForm;

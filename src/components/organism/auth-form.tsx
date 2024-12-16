"use client";
import { useRouter } from "next/navigation";
import { FormItem } from "@/components/molecule";
import { Button, TextBox } from "@/components/atom";
import { useCallback, useState } from "react";
import {
    GetErrorText,
    isValidEmail,
    isValidTelegramID,
    setTokensToAppLocalStorage,
} from "@/helpers";
import {
    GetMemberByEmailOrTelegramId,
    GetUserToken,
    SendOTPCode,
} from "@/services/members";
import { MemberDto } from "@/types/dto/members";
import BaseState from "@/stores/base";

interface AuthFormState extends MemberDto {
    isLogin: boolean;
    isLoading: boolean;
}

const AuthForm = () => {
    const router = useRouter();
    const [dto, setDto] = useState({
        email: "",
        telegramId: "",
        fullName: "",
        otpCode: "",
        isLogin: false,
        isLoading: false,
    } as AuthFormState);
    const doOTPValidations = useCallback(() => {
        if ((!dto.email && !dto.telegramId) || !dto.fullName) {
            BaseState.setAlert({
                message: "Please fill email or telegramId with full name",
                type: "error",
            });
            return false;
        }
        if (dto.email && !isValidEmail(dto.email)) {
            BaseState.setAlert({
                message: "Please enter a valid email",
                type: "error",
            });
            return false;
        }
        if (dto.telegramId && !isValidTelegramID(dto.telegramId)) {
            BaseState.setAlert({
                message: "Please enter a valid telegramId",
                type: "error",
            });
            return false;
        }
        return true;
    }, [dto.email, dto.fullName, dto.telegramId]);

    const sendOTP = async () => {
        if (!doOTPValidations()) {
            return;
        }
        try {
            //call the sendOTP service function and check if the OTP is sent
            setDto((perv) => ({ ...perv, isLoading: true }));
            const resp = await SendOTPCode(dto);
            if (resp) {
                BaseState.setAlert({
                    message: "OTP Code Sent Successfully",
                    type: "success",
                });
            }
        } catch (error) {
            BaseState.setAlert({
                message: GetErrorText(error),
                type: "error",
                closable: true,
            });
        } finally {
            setDto((perv) => ({ ...perv, isLoading: false }));
        }
    };
    const updateDto = useCallback(async (name: string, value: any) => {
        setDto((prev) => ({ ...prev, [name]: value }));
        //check if name is email or telegramId and check if one of them are valid with isValidEmail or isValidTelegramID
        if (
            (name === "email" && isValidEmail(value)) ||
            (name === "telegramId" && isValidTelegramID(value))
        ) {
            const data = await GetMemberByEmailOrTelegramId(value, value);
            if (data?.fullName) {
                setDto((prev) => ({
                    ...prev,
                    fullName: data.fullName,
                    isLogin: true,
                }));
            } else {
                setDto((prev) => ({ ...prev, fullName: "", isLogin: false }));
            }
        }
    }, []);

    const loginOrRegister = async () => {
        if (!doOTPValidations()) {
            return;
        }
        if (!dto.otpCode || dto.otpCode.length < 4) {
            BaseState.setAlert({
                message: "Please enter a valid OTP code",
                type: "error",
            });
            return;
        }
        try {
            setDto((perv) => ({ ...perv, isLoading: true }));
            //call the GetUserToken service function and check if the token is received
            const token = await GetUserToken(dto);
            if (token) {
                setTokensToAppLocalStorage(token);
                router.push("/dashboard");
            }
        } catch (error) {
            BaseState.setAlert({
                message: GetErrorText(error),
                type: "error",
            });
        } finally {
            setDto((perv) => ({ ...perv, isLoading: false }));
        }
    };

    return (
        <fieldset
            className={
                "auth-form grid w-full place-items-center gap-3 [&>.hk-button]:w-full"
            }
        >
            <FormItem label={"Email"}>
                <TextBox
                    type={"text"}
                    placeholder={"john@example.com"}
                    name={"email"}
                    value={dto.email}
                    updateDto={updateDto}
                />
            </FormItem>
            <FormItem label={"Telegram ID"}>
                <TextBox
                    type={"text"}
                    placeholder={"@john2024"}
                    name={"telegramId"}
                    value={dto.telegramId}
                    updateDto={updateDto}
                />
            </FormItem>
            <FormItem label={"Full Name"}>
                <TextBox
                    type={"text"}
                    placeholder={"John Doe"}
                    name={"fullName"}
                    value={dto.fullName}
                    updateDto={updateDto}
                    disabled={dto.isLogin}
                />
            </FormItem>
            <Button
                label={"Send OTP Code"}
                intend={"primary"}
                onClick={sendOTP}
                disabled={dto.isLoading}
            />
            <FormItem label={"OTP Code"}>
                <TextBox
                    type={"text"}
                    placeholder={"1234"}
                    name={"otpCode"}
                    updateDto={updateDto}
                />
            </FormItem>
            <Button
                label={dto.isLogin ? "Login to App" : "Register to App"}
                intend={"primary"}
                onClick={loginOrRegister}
                disabled={
                    !dto.otpCode || dto.otpCode.length < 4 || dto.isLoading
                }
            />
        </fieldset>
    );
};

export default AuthForm;

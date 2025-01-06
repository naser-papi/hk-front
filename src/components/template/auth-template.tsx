import { AuthForm, AuthHeader } from "@/components/organism";
import Image from "next/image";
import welcomImg from "assets/images/welcome.png";
import trans from "@/helpers/i18n/server";

const AuthTemplate = () => {
    return (
        <div
            className={
                "template min-h-screen !place-items-start !gap-2 bg-[rgba(31,41,55,0.5)] !p-0 [&>.auth-form]:p-4 md:[&>.auth-form]:gap-4 lg:[&>.auth-form]:gap-5 [&>.auth-form_.hk-text-box]:bg-white"
            }
        >
            <AuthHeader />
            <h2 className={"mt-4"}>
                <span>{trans("auth.welcome")}</span>
                <Image
                    src={welcomImg}
                    alt={":)"}
                    width={32}
                    height={32}
                    className={"inline"}
                />
            </h2>
            <AuthForm />
        </div>
    );
};

export default AuthTemplate;

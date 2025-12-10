import trans from "@/helpers/i18n/server";
import { LandingContactForm } from "@/components/organism";

const LandingContact = () => {
    return (
        <section id={"contact"} className={"template bg-white"}>
            <h4 className={"text-xl font-normal text-secondary"}>
                {trans("common.getInTouch")}
            </h4>
            <h2 className={"whitespace-pre"}>
                {trans("common.haveAQuestion")}
            </h2>
            <LandingContactForm />
        </section>
    );
};

export default LandingContact;

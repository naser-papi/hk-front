import trans from "@/helpers/i18n/server";
import { ContactForm } from "@/components/organism";

const LandingContact = () => {
    return (
        <section id={"contact"} className={"template"}>
            <h4 className={"text-xl font-normal text-secondary"}>
                {trans("common.getInTouch")}
            </h4>
            <h2 className={"whitespace-pre"}>
                {trans("common.haveAQuestion")}
            </h2>
            <ContactForm />
        </section>
    );
};

export default LandingContact;

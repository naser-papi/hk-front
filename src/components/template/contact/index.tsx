import "../template.css";
import trans from "@/helpers/i18n/server";
import { ContactForm } from "@/components";

const Contact = () => {
    return (
        <section id={"contact"} className={"template contact"}>
            <h4>{trans("common.getInTouch")}</h4>
            <h2>{trans("common.haveAQuestion")}</h2>
            <ContactForm />
        </section>
    );
};

export default Contact;

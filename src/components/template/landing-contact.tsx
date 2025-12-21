import { LandingContactForm, CTA } from "@/components/organism";

const LandingContact = () => {
    return (
        <>
            <CTA />
            <section id={"contact"} className={"template"}>     
                <LandingContactForm />
            </section>
        </>
        
    );
};

export default LandingContact;

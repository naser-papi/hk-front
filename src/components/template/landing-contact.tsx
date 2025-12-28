import { LandingContactForm, CTA } from "@/components/organism";

const LandingContact = () => {
    return (
        <>
            <CTA />
            <section id={"contact"} className={"template scroll-mt-60"}>     
                <LandingContactForm />
            </section>
        </>
        
    );
};

export default LandingContact;

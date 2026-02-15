import trans from "@/helpers/i18n/server";

const ServicesHero = () => {
    return (
        <section id={"service-hero"} className={"template hero bg-primary"}>
            <div
                className={
                    "flex h-[265px] w-full flex-col items-start justify-center gap-4 bg-secondary p-8"
                }
            >
                <h1 className={"text-4xl font-bold text-white"}>
                    {trans("common.servicesHeader")}
                </h1>
                <p className={"text-xl text-white"}>
                    {trans("common.servicesHeaderDesc")}
                </p>
            </div>
        </section>
    );
};

export default ServicesHero;

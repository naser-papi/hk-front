import ServicesFilterList from "@/components/organism/services-filter-list";

const ServicesList = () => {
    return (
        <section
            id={"services-list"}
            className={"template [&_.filter-list-container]:mt-[-100px]"}
        >
            <ServicesFilterList />
        </section>
    );
};

export default ServicesList;

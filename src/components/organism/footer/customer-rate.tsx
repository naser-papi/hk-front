import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@awesome.me/kit-026a927a83/icons/classic/solid";

const CustomerRate = () => {
    return (
        <section className={"flex flex-col items-start gap-2 text-white"}>
            <h3 className={"text-3xl font-bold"}>Customer Rating</h3>
            <div className={"flex items-center gap-2 text-warning"}>
                <FontAwesomeIcon icon={faStar} key={"1"} />
                <FontAwesomeIcon icon={faStar} key={"2"} />
                <FontAwesomeIcon icon={faStar} key={"3"} />
                <FontAwesomeIcon icon={faStar} key={"4"} />
                <FontAwesomeIcon icon={faStar} key={"5"} />
            </div>
            <strong className={"block text-2xl"}>4.8 / 5.0</strong>
            <span className={"block text-lg"}>
                By 70+ Visa Approved Customers
            </span>
        </section>
    );
};

export default CustomerRate;

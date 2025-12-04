import { FaStar } from "react-icons/fa6";

const CustomerRate = () => {
    return (
        <section className={"flex flex-col items-start gap-2 text-white"}>
            <h3 className={"text-3xl font-bold"}>Customer Rating</h3>
            <div className={"flex items-center gap-2 text-warning"}>
                <FaStar key={"1"} />
                <FaStar key={"2"} />
                <FaStar key={"3"} />
                <FaStar key={"4"} />
                <FaStar key={"5"} />
            </div>
            <strong className={"block text-2xl"}>4.8 / 5.0</strong>
            <span className={"block text-lg"}>
                By 70+ Visa Approved Customers
            </span>
        </section>
    );
};

export default CustomerRate;

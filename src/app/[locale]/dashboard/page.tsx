import { GetHeaderUserInfo } from "@/services/server";

const DashboardPage = async () => {
    //retrieve userInfo from request header
    const userInfo = await GetHeaderUserInfo();
    return (
        <main className={"page-default-container w-full"}>
            <section className={"template bg-white text-black"}>
                <h2 className={"w-full text-center text-2xl font-semibold"}>
                    Welcome{" "}
                    <span className={"text-secondary"}>{userInfo.fullName}</span>
                    {" "}to the HollandKade User&#39;s Panel
                </h2>
            </section>
        </main>
    );
};

export default DashboardPage;

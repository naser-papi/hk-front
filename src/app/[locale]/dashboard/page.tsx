import { GetHeaderUserInfo } from "@/services/server";

const DashboardPage = async () => {
    //retrieve userInfo from request header
    const userInfo = await GetHeaderUserInfo();
    return (
        <main className={"page-default-container w-full text-center"}>
            <h2 className={"w-full text-center text-2xl text-black"}>
                Welcome{" "}
                <span className={"text-secondary"}>{userInfo.fullName}</span> to
                the HollandKade User&#39;s Panel
            </h2>
        </main>
    );
};

export default DashboardPage;

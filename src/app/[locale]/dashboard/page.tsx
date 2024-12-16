import { GetHeaderUserInfo } from "@/services/server";

const DashboardPage = async () => {
    //retrieve userInfo from request header
    const userInfo = await GetHeaderUserInfo();
    return (
        <main className={"page-default-container"}>
            <h2 className={"text-2xl text-black"}>
                Welcome{" "}
                <span className={"text-secondary"}>{userInfo.fullName}</span> to
                the Holland Kade User&#39;s Panel
            </h2>
        </main>
    );
};

export default DashboardPage;

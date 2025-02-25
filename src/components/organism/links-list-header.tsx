import trans from "@/helpers/i18n/server";

const LinksListHeader = async () => {
    return (
        <div className={"links-list-header py-4"}>
            <h2 className={"text-title"}>{trans("common.usefulLinks")}</h2>
        </div>
    );
};

export default LinksListHeader;

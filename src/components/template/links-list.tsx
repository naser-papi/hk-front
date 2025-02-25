import { LinksFilterList, LinksListHeader } from "@/components/organism";

const LinksList = () => {
    return (
        <section id={"links-list"} className={"template"}>
            <LinksListHeader />
            <LinksFilterList />
        </section>
    );
};

export default LinksList;

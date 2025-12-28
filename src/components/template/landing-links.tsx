import trans from "@/helpers/i18n/server";
import { LinkCardsContainer } from "@/components/organism";
import { SectionHeader } from "@/components/molecule";

const LandingLinks = () => {
    return (
        <section id={"links"} className={"template scroll-mt-20"}>
            <SectionHeader
                title={trans("common.usefulLinks")}
                description={trans("common.usefulResourcesDesc")}
                buttonLabel={trans("common.allLinks")}
                descriptionClassName="text-gray-100"
                buttonLink="/links"
            />
            <LinkCardsContainer />
        </section>
    );
};

export default LandingLinks;

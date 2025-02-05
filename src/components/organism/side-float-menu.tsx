import { MenuLinks } from "@/constants/base";
import { MenuLink } from "@/components/atom";
import ShareButton from "@/components/organism/share-button";

const SideFloatMenu = () => {
    return (
        <aside className={"side-float-menu"}>
            <nav>
                {MenuLinks.map((link) => (
                    <MenuLink
                        key={link.id}
                        label={link.title}
                        icon={link.icon}
                        href={link.path}
                        hideLabel
                    />
                ))}
            </nav>
            <hr />
            <nav>
                <ShareButton />
            </nav>
        </aside>
    );
};

export default SideFloatMenu;

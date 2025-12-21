import trans from "@/helpers/i18n/server";
import Link from "next/link";

const QuickLinks = () => {
    const links = [
        { label: trans("common.home"), href: "/" },
        { label: trans("common.posts"), href: "/#blogs" },
        { label: trans("common.services"), href: "/#services" },
        { label: trans("common.events"), href: "/#events" },
    ];

    return (
        <section className="footer-quick-links">
            <h3 className="text-xl font-bold text-white mb-4">
                {trans("common.quickLinks")}
            </h3>
            <ul className="flex flex-col gap-2">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-white hover:text-orange-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default QuickLinks;


import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { ProfileAvatar } from "@/components";
import { ProfileAvatarProps } from "@/components/atom/profile-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@awesome.me/kit-026a927a83/icons/classic/solid";
const variants = cva([
    "grid",
    "gap-4",
    "p-4",
    "min-w-[300px]",
    "bg-white",
    "text-primary",
    "rounded-lg",
    "[&>section]:flex",
    "[&>section]:items-center",
    "[&>section]:justify-between",
    "[&>section>svg]:text-alt-heading",
]);

interface QuoteCardProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof variants> {
    profile: ProfileAvatarProps;
    quote: string;
}

const QuoteCard = ({ profile, quote }: QuoteCardProps) => {
    return (
        <div className={variants({})}>
            <section>
                <ProfileAvatar {...profile} />
                <FontAwesomeIcon icon={faQuoteRight} />
            </section>
            <p>{quote}</p>
        </div>
    );
};

export default QuoteCard;

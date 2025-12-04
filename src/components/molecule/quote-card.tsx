import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { ProfileAvatar } from "@/components/atom";
import { ProfileAvatarProps } from "@/components/atom/profile-avatar";
import { FaQuoteRight } from "react-icons/fa6";

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
                <FaQuoteRight />
            </section>
            <p>{quote}</p>
        </div>
    );
};

export default QuoteCard;

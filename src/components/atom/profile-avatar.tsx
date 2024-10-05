import { cva, VariantProps } from "class-variance-authority";
import Avatar from "./avatar";
import { ImgHTMLAttributes } from "react";
import { StaticImageData } from "next/image";

const variants = cva(
    [
        "flex",
        "items-center",
        "gap-3",
        "[&>.info]:flex",
        "[&>.info]:flex-col",
        "[&>.info]:gap-3",
        "[&_h4]:text-label",
        "[&_span]:text-body",
        "[&_span]:text-cyan",
        "text-black",
    ],
    {
        variants: {
            size: {
                small: [],
                medium: [],
                large: [],
            },
        },
    }
);

interface ProfileAvatarProps
    extends ImgHTMLAttributes<HTMLImageElement>,
        VariantProps<typeof varaints> {
    image: StaticImageData;
    title: string;
    subtitle: string;
}

const ProfileAvatar = ({
    image,
    size,
    title,
    subtitle,
}: ProfileAvatarProps) => {
    return (
        <section className={variants({ size })}>
            <Avatar image={image} />
            <div className={"info"}>
                <h4>{title}</h4>
                <span>{subtitle}</span>
            </div>
        </section>
    );
};

export default ProfileAvatar;

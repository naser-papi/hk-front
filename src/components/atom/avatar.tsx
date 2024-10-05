import { cva, VariantProps } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import { ImgHTMLAttributes } from "react";

const variants = cva(
    [
        "rounded-full",
        "border-2",
        "border-white",
        "relative",
        "[&>img]:rounded-full",
    ],
    {
        variants: {
            size: {
                small: ["w-[72px]", "h-[72px]"],
                medium: [],
                large: [],
            },
        },
        defaultVariants: {
            size: "small",
        },
    }
);

interface AvatarProps
    extends ImgHTMLAttributes<HTMLImageElement>,
        VariantProps<typeof variants> {
    image: StaticImageData;
}

const Avatar = ({ size, image, alt }: AvatarProps) => {
    return (
        <div className={variants({ size })}>
            <Image src={image} alt={alt} fill />
        </div>
    );
};

export default Avatar;

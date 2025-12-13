"use client";
import Image, { ImageProps } from "next/image";

interface IImageKitLoader {
    src: string;
    width?: number;
    quality?: number;
}

const imageKitLoader = ({ src, width, quality }: IImageKitLoader) => {
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    return `${src}?tr=${paramsString}`;
};

interface ImageKitProps extends Omit<ImageProps, "loader"> {
    priority?: boolean; // Make priority optional, default to false for lazy loading
    quality?: number;
}

const ImageKit = ({ src, alt, priority = false, quality = 75, ...rest }: ImageKitProps) => {
    return (
        <Image
            loader={(props) => imageKitLoader({ src: props.src, width: props.width, quality })}
            src={src}
            alt={alt}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            {...rest}
        />
    );
};

export default ImageKit;

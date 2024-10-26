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

const ImageKit = ({ src, alt, ...rest }: ImageProps) => {
    return (
        <Image loader={imageKitLoader} src={src} alt={alt} priority {...rest} />
    );
};

export default ImageKit;

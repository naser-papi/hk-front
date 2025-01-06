import Image from "next/image";
import authBannerFull from "assets/images/auth-banner-full.png";

const AuthHeader = () => {
    return (
        <header
            className={
                "relative mx-auto h-[220px] w-full max-w-[1024px] overflow-x-hidden md:h-[320px]"
            }
        >
            <Image
                src={authBannerFull}
                alt={"Holland Kade Banner"}
                fill
                className={"object-cover"}
            />
        </header>
    );
};

export default AuthHeader;

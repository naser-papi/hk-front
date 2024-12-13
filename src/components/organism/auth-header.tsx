import Image from "next/image";
import bigFlag from "assets/images/big-flag.jpeg";
import NlLogo from "@/components/atom/nl-logo";

const AuthHeader = () => {
    return (
        <header
            className={"relative h-[140px] w-full md:h-[200px] lg:h-[270px]"}
        >
            <Image
                src={bigFlag}
                alt={"Holland Kadeh Banner"}
                fill
                className={"object-cover"}
            />
            <div
                className={
                    "relative z-10 grid h-full w-full grid-cols-[1fr_50px] items-center gap-3 bg-[rgba(255,255,255,0.5)] p-4"
                }
            >
                <h3
                    className={
                        "text-border-white w-[70%] text-center text-4xl font-extrabold text-primary"
                    }
                >
                    Immigration To Netherlands
                </h3>
                <NlLogo type={"default"} />
            </div>
        </header>
    );
};

export default AuthHeader;

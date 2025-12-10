import Image from "next/image";
import flag from "assets/images/big-flag.jpeg";
import { NlLogo } from "@/components/atom";

interface FlagHeaderProps {
    title: string;
}

const FlagHeader = ({ title }: FlagHeaderProps) => {
    return (
        <div
            className={
                "flag-header relative h-[160px] w-full min-w-[320px] @container"
            }
        >
            <Image src={flag} alt={"flag"} fill />
            <div
                className={
                    "relative z-10 flex h-full w-full items-center justify-between bg-black/40 p-4 backdrop-blur-sm"
                }
            >
                <h3
                    className={
                        "text-border-white max-w-[60%] text-center text-4xl font-black text-primary @2xl:text-5xl @2xl:leading-[64px]"
                    }
                >
                    {title}
                </h3>
                <NlLogo type={"default"} />
            </div>
        </div>
    );
};

export default FlagHeader;

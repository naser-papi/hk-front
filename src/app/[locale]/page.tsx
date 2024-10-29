import { Hero } from "@/components";
import Background from "@/app/[locale]/background";

interface HomeProps {
    params: any;
}
export default function Home({ params }: HomeProps) {
    return (
        <main className="relative grid h-screen w-screen place-items-start">
            <Background />
            <Hero />
        </main>
    );
}

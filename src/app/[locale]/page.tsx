import {
    Blogs,
    Contact,
    Events,
    Footer,
    Hero,
    Links,
    Services,
} from "@/components";

interface HomeProps {
    params: any;
}
export default function Home({ params }: HomeProps) {
    return (
        <main className="relative grid h-full max-h-screen w-full place-items-start overflow-y-auto">
            <Hero />
            <Services />
            <Blogs />
            <Events />
            <Links />
            <Contact />
            <Footer />
        </main>
    );
}

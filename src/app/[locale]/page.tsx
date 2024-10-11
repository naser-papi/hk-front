interface HomeProps {
    params: any;
}
export default function Home({ params }: HomeProps) {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <h1>Welcome to HollandKade Website</h1>
        </div>
    );
}

import { Button } from "@/components/atom";

interface SectionHeaderProps {
    title: string;
    description: string;
    descriptionClassName?: string;
    buttonLabel: string;
    buttonLink: string;
}

const SectionHeader = ({
    title,
    description,
    descriptionClassName = "text-gray-900",
    buttonLabel,
    buttonLink,
}: SectionHeaderProps) => {
    return (
        <header className="flex justify-between items-center w-full my-10">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className={`text-sm ${descriptionClassName}`}>{description}</p>
            </div>
            <Button variant="secondary" label={buttonLabel} link={buttonLink} />
        </header>
    );
};

export default SectionHeader;


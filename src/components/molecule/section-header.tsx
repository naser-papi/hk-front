import { Button } from "@/components/atom";

interface SectionHeaderProps {
    title: string;
    description: string;
    descriptionClassName?: string;
    buttonLabel: string;
    buttonLink?: string;
}

const SectionHeader = ({
    title,
    description,
    descriptionClassName = "text-gray-900",
    buttonLabel,
    buttonLink,
}: SectionHeaderProps) => {
    return (
        <header className="my-10 flex w-full items-center justify-between">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className={`text-sm ${descriptionClassName}`}>
                    {description}
                </p>
            </div>
            {buttonLink === undefined ? null : (
                <Button
                    variant="secondary"
                    label={buttonLabel}
                    link={buttonLink}
                />
            )}
        </header>
    );
};

export default SectionHeader;

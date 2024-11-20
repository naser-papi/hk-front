import { KeyText } from "@/types/base";
import { Button } from "@/components/atom";
import { Container } from "@/components/molecule";

interface CategoryListProps {
    cats: KeyText[];
    selected: number;
    setSelected: (index: number) => void;
}

const CategoryList = ({ cats, selected, setSelected }: CategoryListProps) => {
    return (
        <Container direction={"row"} noScroll>
            {cats.map((cat) => (
                <Button
                    label={cat.text}
                    key={cat.key}
                    intend={"filter"}
                    onClick={() => setSelected(cat.key)}
                    selected={selected === cat.key}
                />
            ))}
        </Container>
    );
};

export default CategoryList;

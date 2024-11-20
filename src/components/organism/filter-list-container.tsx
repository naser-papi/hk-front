"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryDto } from "@/types/dto/common";
import { CategoryList, Container } from "@/components/molecule";
import { faSearch } from "@awesome.me/kit-026a927a83/icons/classic/regular";
import { TextBox } from "@/components/atom";
import { KeyText } from "@/types/base";

interface FilterListContainerProps {
    children: React.ReactNode[] | JSX.Element;
    route: string;
    list: { id: number; category?: CategoryDto }[];
}

const FilterListContainer = ({
    children,
    route,
    list,
}: FilterListContainerProps) => {
    const [query, setQuery] = useState({
        filter: "",
        cat: 0,
        page: 1,
    });
    const router = useRouter();
    useEffect(() => {
        const urlQuery = `?page=${query.page}&cat=${query.cat}&filter=${query.filter}`;
        router.push(`${route}${urlQuery}`);
    }, [query.page, query.cat, query.filter]);
    const cats: KeyText[] = list
        .filter((item) => item.category != undefined)
        .map((item) => ({
            key: item.category!.id,
            text: item.category!.title,
        }));
    if (cats && cats.length) {
        cats.unshift({ key: 0, text: "All" });
    }
    return (
        <Container direction={"column"} gap={"little"}>
            <TextBox
                type={"text"}
                icon={faSearch}
                className={"w-full"}
                onEnterKeyPressed={(filter) =>
                    setQuery((perv) => ({
                        ...perv,
                        filter,
                    }))
                }
            />
            <CategoryList
                cats={cats}
                selected={query.cat}
                setSelected={(key: number) =>
                    setQuery((perv) => ({ ...perv, cat: key }))
                }
            />
            {children}
        </Container>
    );
};

export default FilterListContainer;

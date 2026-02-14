"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryDto } from "@/types/dto/common";
import { CategoryList, Container } from "@/components/molecule";
import { TextBox } from "@/components/atom";
import useTranslation from "@/helpers/i18n/use-translation";
import { FaSearchengin } from "react-icons/fa6";

interface FilterListContainerProps {
    children: JSX.Element[] | JSX.Element;
    route: string;
    catList: CategoryDto[];
}

const FilterListContainer = ({
    children,
    route,
    catList,
}: FilterListContainerProps) => {
    const [query, setQuery] = useState({
        filter: "",
        cat: 0,
        page: 1,
    });
    const router = useRouter();
    const { t } = useTranslation();
    useEffect(() => {
        const urlQuery = `?page=${query.page}&cat=${query.cat}&filter=${query.filter}`;
        router.push(`${route}${urlQuery}`);
    }, [query.page, query.cat, query.filter]);

    const cats = Array.from(
        new Map(
            catList.map((item) => [item.id, { key: item.id, text: item.title }])
        ).values()
    );

    if (cats && cats.length) {
        cats.unshift({ key: 0, text: t("common.allCategories") });
    }
    return (
        <Container
            direction={"column"}
            gap={"little"}
            className={"filter-list-container"}
        >
            <div
                className={
                    "mb-4 flex w-full flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-md"
                }
            >
                <TextBox
                    type={"text"}
                    icon={FaSearchengin}
                    className={"w-full"}
                    value={query.filter}
                    clearable
                    placeholder={t("common.typeToFilter")}
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
            </div>

            {children}
        </Container>
    );
};

export default FilterListContainer;

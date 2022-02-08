import React, { useMemo, useState } from "react";
import { CTag } from "../../components";
import { Container } from "../";
import { getUniqueCategoriesArray } from "../../lib/utils";
import { GreyMatter } from "../../lib/mdx";
import { IBlogCard } from "../../components/BlogCard";
interface Props {
  data: Array<GreyMatter>;
  cardComponent: React.FC<IBlogCard>;
}

const Index: React.FC<Props> = ({ data, cardComponent }) => {
  const Component = cardComponent;
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  let [enabledCategories, setEnabledCategories] = useState<string[]>([]);
  const categories = getUniqueCategoriesArray(data);

  const renderCards = useMemo(() => {
    let enabledCategories: any[] = [];
    let cards = data
      .filter((val) => {
        if (selectedCategory.length === 0) {
          return true;
        } else {
          let matched = true;
          selectedCategory.forEach((category) => {
            if (!val.allCategories.includes(category)) {
              matched = false;
            }
          });
          return matched;
        }
      })
      .map((val, i) => {
        enabledCategories.push(val.allCategories);
        return <Component key={i} {...val} />;
      });
    setEnabledCategories(Array.from(new Set(enabledCategories.flat())));

    return cards;
  }, [selectedCategory]);
  const onCategorySelected = (category: string) => {
    if (!enabledCategories.includes(category)) return;
    setSelectedCategory((prev) => {
      let newSelection = [...prev];
      if (selectedCategory.includes(category)) {
        newSelection = selectedCategory.filter((val) => val !== category);
      } else {
        newSelection = [...selectedCategory, category];
      }
      return newSelection;
    });
  };
  return (
    <>
      <Container>
        <div className="flex flex-col">
          <div className="my-8 ">
            {categories.map((val, i) => (
              <CTag
                key={i}
                isActive={selectedCategory.includes(val)}
                isDisabled={!enabledCategories.includes(val)}
                onClick={() => onCategorySelected(val)}
              >
                {val}
              </CTag>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-10 py-16">
            {renderCards}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Index;

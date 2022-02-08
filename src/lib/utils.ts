export const getUniqueCategoriesArray = (data: Array<any>) => {
  return Array.from(
    new Set([...data.map((val) => [...val.allCategories])].flat())
  );
};

export const includesArray = (lhs: string[], rhs: string[]) => {
  for (let i = 0; i < lhs.length; i++) {
    for (let j = 0; j < rhs.length; i++) {}
  }
};

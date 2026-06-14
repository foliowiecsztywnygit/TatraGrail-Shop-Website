import { defaultLegacyCategories, tshirtBack, tshirtFront } from '../shared/cmsDefaults'

export { tshirtFront, tshirtBack }

export const categoriesData = defaultLegacyCategories;

// Helper do spłaszczania listy produktów dla stron produktowych
export const getProductById = (id) => {
  for (const cat of categoriesData) {
    const prod = cat.products.find(p => p.id === id);
    if (prod) return prod;
  }
  return null;
};

import { createContext, useState } from 'react';

import PRODUCS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};

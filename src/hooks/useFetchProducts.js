import { useContext, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { ProductsContext } from "../providers/products";

export const useFetchProducts = (searchText) => {
  const { products, setProducts } = useContext(ProductsContext);

  const debouncedSearchText = useDebounce(searchText, 300);
  useEffect(() => {
    const fetchProducts = async () => {
      const url = new URL("https://6597ee73668d248edf23ba81.mockapi.io/Product");
      url.searchParams.append("search", debouncedSearchText);
      const res = await fetch(url);
      const products = await res.json();
      console.log(products);
      if (products === "Not found") {
        setProducts([]);
      } else {
        setProducts(products);
      }
    };

    fetchProducts();
  }, [debouncedSearchText, setProducts]);

  return products;
};

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFiltration = (data, minPrice, maxPrice, sorted) => {
  const [products, setProducts] = useState(data);
  const { discounted } = useSelector((state) => state.filter);

  useEffect(() => {
    const filterProducts = () => {
      if (!data) return;

      let filteredProducts = data.filter((product) => {
        return (
          (!minPrice || product.price >= Number(minPrice)) &&
          (!maxPrice || product.price <= Number(maxPrice))
        );
      });

      // Apply discount filter if necessary
      if (discounted) {
        filteredProducts = filteredProducts.filter(
          (product) => product.discont_price
        );
      }

      // Sorting
      const sortedProducts =
        sorted === "" || sorted === "By default"
          ? filteredProducts
          : sorted === "asc"
          ? [...filteredProducts].sort((a, b) => a.price - b.price)
          : sorted === "desc"
          ? [...filteredProducts].sort((a, b) => b.price - a.price)
          : sorted === "nameAz"
          ? [...filteredProducts].sort((a, b) =>
              a.title.localeCompare(b.title)
            )
          : sorted === "nameZa"
          ? [...filteredProducts].sort((a, b) =>
              b.title.localeCompare(a.title)
            )
          : filteredProducts;

      setProducts(sortedProducts);
    };

    const timerId = setTimeout(filterProducts, 300);
    return () => clearTimeout(timerId);
  }, [data, minPrice, maxPrice, sorted, discounted]);

  return products;
};

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchFun = () =>
    products.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item?.detail?.toLowerCase()?.includes(searchQuery) ||
        item?.search_terms?.toLowerCase()?.includes(searchQuery) ||
        item.alternative.name.toLowerCase().includes(searchQuery) ||
        item?.alternative?.detail?.toLowerCase()?.includes(searchQuery),
    );

  return (
    <section className="shadow-inset mb-8 rounded-xl bg-gray-100 p-3 md:p-4">
      <div className="my-6 flex w-full justify-center">
        <input
          onChange={(e) => setSearchQuery(e.target.value?.toLowerCase())}
          autoComplete="search"
          className="w-[80%] rounded-md border-0 bg-white px-3.5 py-2 text-slate-700 shadow-lg outline-none ring-1 ring-inset ring-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          type="search"
          placeholder="Search product"
          name="search"
        />
      </div>
      <div>
        <ul className="grid grid-cols-1 gap-6">
          {searchFun()?.map((product, i) => (
            <div className="flex gap-3 md:gap-6" key={i}>
              <ProductCard productDetail={product} />
              <ProductCard
                productDetail={product.alternative}
                alternative={true}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Jane Cooper",
    detail: "Regional Paradigm Technician",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    detail: "Regional Paradigm Technician",
    imageUrl:
      "https://seeklogo.com/images/P/pepsi-logo-1CC1DE9113-seeklogo.com.png",
  },
  {
    name: "Jane Cooper",
    detail: "Regional Paradigm Technician",
    imageUrl:
      "https://seeklogo.com/images/P/pepsi-logo-1CC1DE9113-seeklogo.com.png",
  },
  {
    name: "Pepsi",
    detail: "Regional Paradigm Technician",
    imageUrl:
      "https://seeklogo.com/images/P/pepsi-logo-1CC1DE9113-seeklogo.com.png",
  },
  {
    name: "Jane Cooper",
    detail: "Regional Paradigm Technician",
    imageUrl:
      "https://seeklogo.com/images/P/pepsi-logo-1CC1DE9113-seeklogo.com.png",
  },
  {
    name: "Jane Cooper",
    detail: "Regional Paradigm Technician",
    imageUrl:
      "https://seeklogo.com/images/P/pepsi-logo-1CC1DE9113-seeklogo.com.png",
  },
  {
    name: "Jane Cooper",
    detail: "Regional Paradigm Technician",
    imageUrl:
      "https://seeklogo.com/images/P/pepsi-logo-1CC1DE9113-seeklogo.com.png",
  },
];
export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log("🚀 ~ ProductList ~ searchQuery:", searchQuery)
  const [data, setData] = useState([]);

  const searchFun = () => {
    return products.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.detail.toLowerCase().includes(searchQuery),
    );
  };
  return (
    <section className="bg-gray-100">
      <div className="flex w-full justify-center">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="search"
          className="w-[80%] rounded-md border-0 bg-white px-3.5 py-2 text-slate-700 shadow-lg outline-none ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          type="search"
          name="search"
        />
      </div>
      <div>
        <ul className="grid grid-cols-2 gap-6">
          {searchFun()?.map((product, i) => (
            <ProductCard productDetail={product} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

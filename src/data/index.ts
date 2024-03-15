import { IListOfProducts } from "../types";

export const products: IListOfProducts[] = [
  {
    key: 101,
    name: "Lipton",
    detail:
      // "Lipton is a British-American brand of tea, owned by Lipton Teas and Infusions. Lipton was also the name of a supermarket chain in the United Kingdom, owned by Allied Suppliers",
      "Lipton is a British-American brand of tea, owned by Lipton Teas and Infusions.",
    imageUrl:
      "https://seeklogo.com/images/L/lipton-logo-F5DF9ADD79-seeklogo.com.png",
    alternative: {
      name: "Tapal",
      detail:
        "Tapal Tea is a Pakistani tea company which is based in Karachi, Pakistan. Tapal is the market leader of branded tea in Pakistan.",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/9145a276701149.Y3JvcCw5OTksNzgyLDAsMTA4.jpg",
    },
  },

  {
    key: 1,
    name: "pepsi",
    detail: "",
    imageUrl:
      "https://seeklogo.com/images/P/pepsi-logo-1CC1DE9113-seeklogo.com.png",
    alternative: {
      name: "cola next",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJaCHpLkpU_H5GTASdCkLzzpHcn7xgh9PrD5YIZNdhp3OKhXfkwpbWESmcbiuruLzb50&usqp=CAU",
    },
    search_terms: "papsi , cold drink",
  },
  {
    key: 2,
    name: "Rafhan",
    detail: "oils, custard, jelly",
    alternative: { name: "Fauji, Sufi", detail: "" },
    search_terms: "castard",
  },
  {
    key: 4,
    name: "Brook-bond Supreme",
    detail: "tea",
    alternative: { name: "vital", detail: "" },
    search_terms: "chai",
  },
  {
    key: 5,
    name: "Nescafe",
    detail: "coffee",
    alternative: {
      name: "IndoCafe, Ponam Imtaiz Coffee",
      detail: "Turkish/Arab brands",
    },
    search_terms: "cofe",
  },
  {
    key: 6,
    name: "Nestle",
    detail: "Nido, Everyday, Milk Pak and all Nestle Dairy products",
    alternative: {
      name: "dayFresh",
      detail:
        "These are some other safe brands nurpur, prema, olpers, anhaar, polac, milac",
    },
    search_terms: "dhoodh, nastle neslte Nestly day fresh seccc",
  },
  {
    key: 7,
    name: "Milk Pak",
    detail: "Product of Nestle",
    alternative: {
      name: "Nurpur",
      detail:
        "Nurpur is a brand of dairy products owned by Fauji Foods Limited, a Pakistani food company based in Lahore. The brand includes butter, margarine, cheese, cream, and milk. It's are available online at Metro Pakistan",
    },
    search_terms: "dhoodh",
  },
  {
    key: 8,
    name: "coca cola",
    detail: "",
    alternative: { name: "gourmet cola", detail: "" },
    search_terms: "cold drink",
  },
];

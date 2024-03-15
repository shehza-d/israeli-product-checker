import { IProduct } from "../types";

interface IProps {
  productDetail: IProduct;
  alternative?: boolean;
}

export default function ProductCard({ productDetail, alternative }: IProps) {
  return (
    <li
      className={`flex w-full flex-col items-center justify-between divide-y divide-slate-200 rounded-lg p-3 md:flex-row md:p-6 ${
        alternative ? "bg-green-100" : "bg-red-100"
      } shadow`}
    >
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-medium capitalize text-slate-900">
            {productDetail?.name}
          </h3>
          <span
            className={`inline-block flex-shrink-0 rounded-full border ${
              alternative
                ? "border-green-500 text-green-800"
                : "border-red-500 text-red-800"
            }  px-2 py-[0.4px] text-xs font-light `}
          >
            {alternative ? "Safe" : "Ban"}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-500 md:text-sm">
          {productDetail?.detail}
        </p>
      </div>
      <img
        className="-order-1 h-10 w-10 flex-shrink-0 rounded-full bg-slate-300 shadow-md md:order-1"
        src={
          productDetail?.imageUrl ||
          "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
        }
        alt="product-logo"
      />
    </li>
  );
}

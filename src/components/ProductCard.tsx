export default function ProductCard({ productDetail }: any) {
  const person = productDetail;

  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {person?.name}
            </h3>
            {/* <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
			New
		  </span> */}
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">
            {person?.detail}
          </p>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={person.imageUrl}
          alt="product-logo"
        />
      </div>
    </li>
  );
}

import ProductList from "../components/ProductList";

export default function Main() {
  return (
    <div className="p-4 md:p-10">
      <h1 className="my-10 break-words text-center text-4xl font-bold lg:text-5xl">
        Check for Israeli products 🚫
      </h1>
      <p className="my-6 text-justify text-sm md:text-base">
        Our website is dedicated to providing consumers with the tools to make
        informed choices about the products they purchase. With a focus on
        transparency and ethical consumerism, we offer a platform where users
        can easily check for the origin of products, particularly those
        originating from Israel. By providing this information, we empower
        individuals to align their purchasing decisions with their values and
        beliefs. Whether you're seeking to support local businesses, avoid
        products from certain regions, or simply want to be more conscious of
        your consumption habits, our website strives to be a valuable resource
        in your journey towards responsible consumerism.
      </p>

      <ProductList />
    </div>
  );
}

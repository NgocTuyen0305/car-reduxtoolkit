
import ProductListPage from "../../../pages/ProductList";
const ProductList = () => {
  
  return (
    <div className="max-w-6xl mx-auto my-20">
      <div className="text-center my-6">
        <h3 className="text-slate-800 text-3xl font-bold">Car Catalogue</h3>
        <p className="text-gray-500 text-xl my-4">
          Explore car that you might like!
        </p>
      </div>
      <ProductListPage/>
    </div>
  );
};

export default ProductList;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../features/products/productsSlice";
import ProductBox from "../components/ProductBox";

const Products = () => {

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products )

  useEffect(() => {
    dispatch(getProduct())
  },[dispatch]);

  if(isLoading) {
    return(
      <div className="centerPage">
        <div>Loading porducts ...</div>
      </div>
    )
  }

  return (
    <>
      <div className="productPage">
        <div className="productSection">
          {(
            products.length === 0 ? (
              <div className="noProductDiv">
                <h1 className="noProduct">There's no products yet</h1>
              </div>
            ) : (
              <div className="theProduct">
                {(
                  products.map((product) => (
                    <div className="productDiv" key={product._id}>
                      <ProductBox product={product}/>
                    </div>
                  ))
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Products
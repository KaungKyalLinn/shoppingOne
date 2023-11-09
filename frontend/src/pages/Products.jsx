import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../features/products/productsSlice";
import ProductBox from "../components/ProductBox";

const Products = () => {

  const dispatch = useDispatch();
  const { products, isLoading, isSuccess, isError, massage } = useSelector((state) => state.products )

  useEffect(() => {
    dispatch(getProduct())
  },[dispatch])

  if(isLoading) {
    return(
      <div className="pages">
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
              <div className="productTitleDiv">
                <h1 className="productTitle">There's no products yet</h1>
              </div>
            ) : (
              <div className="theBoard">
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
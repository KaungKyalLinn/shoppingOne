import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, editProduct } from "../features/products/productsSlice";

const ProductForm = ({condition}) => {

  const {massage} = useSelector((state) => state.products)

  const [theProduct, setTheProduct] = useState(condition === null ? (
    {
      img : "",
      type: "",
      description : "",
      sizes: "",
      colors: "",
      price: "",
      aviliables: "",
    }
  ) : (
    condition
  ))
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTheProduct((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const createNewProduct = () => {
    const product = theProduct;
    
    dispatch(createProduct(product))
  }

  const productEditing = () => {
    dispatch(editProduct(theProduct))
  }
  
  const formSubmit = (e) => {
    e.preventDefault(e);
    if(!condition){
      createNewProduct()
    }else if(condition){
      productEditing();
    }
  }


  return (
    <div className="createBoardDiv">
      <form onSubmit={formSubmit} className="createBoard" encType="multipart/form-data">
        <input type="file" name="img" className="img" onChange={onChange}/>
        <input type="text" name="type" className="input" placeholder="product type" value={theProduct.type} onChange={onChange}/>
        <input type="text" name="description" className="input" placeholder="product description" value={theProduct.description} onChange={onChange}/>
        <input type="text" name="sizes" className="input" placeholder="product sizes" value={theProduct.sizes} onChange={onChange}/>
        <input type="text" name="colors" className="input" placeholder="product colors" value={theProduct.colors} onChange={onChange}/>
        <input type="text" name="price" className="input" placeholder="product price" value={theProduct.price} onChange={onChange}/>
        <input type="text" name="aviliables" className="input" placeholder="product aviliables" value={theProduct.aviliables} onChange={onChange}/>

        <button className="btn">{condition ? ("edit") : ("create")}</button>
      </form>
    </div>
  )
}

export default ProductForm
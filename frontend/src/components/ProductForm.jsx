import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, editProduct } from "../features/products/productsSlice";

const ProductForm = ({condition}) => {

  const [theImg, setTheImg] = useState(condition === null ? (null) : ("/upload/" + condition.img));
  const [imgForUpload, setImgForUpload] = useState(null);

  const [theProduct, setTheProduct] = useState(condition === null ? (
    {
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

  const imgChange = (e) => {
    const fileReader = new FileReader();
    const imgFile = e.target.files[0];
    setImgForUpload(imgFile)
    fileReader.onload = (data) => {
      setTheImg(data.target.result)
    }
    fileReader.readAsDataURL(imgFile)
  }

  const createNewProduct = () => {
    const formData = new FormData();
    formData.append("type", theProduct.type)
    formData.append("description", theProduct.description)
    formData.append("sizes", theProduct.sizes)
    formData.append("colors", theProduct.colors)
    formData.append("price", theProduct.price)
    formData.append("aviliables", theProduct.aviliables)
    formData.append("theImg", imgForUpload)
    
    dispatch(createProduct(formData))
  }

  const productEditing = () => {
    const formData = new FormData();
    formData.append("type", theProduct.type)
    formData.append("description", theProduct.description)
    formData.append("sizes", theProduct.sizes)
    formData.append("colors", theProduct.colors)
    formData.append("price", theProduct.price)
    formData.append("aviliables", theProduct.aviliables)
    formData.append("theImg", imgForUpload)
    const product = {formData,theId : theProduct._id}

    dispatch(editProduct(product))
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
      <form onSubmit={formSubmit} className="createBoard">
        <div className="createHalf createLeft">
          <div className="createImgDiv">
            {theImg && <img src={theImg} className="theImg" alt="productImg" />}
          </div>
          <input type="file" name="img" className="img" onChange={imgChange}/>
          <input type="text" name="type" className="productInput" placeholder="product type" value={theProduct.type} onChange={onChange}/>
        </div>
        <div className="createHalf createRight">
          <input type="text" name="description" className="productInput" placeholder="product description" value={theProduct.description} onChange={onChange}/>
          <input type="text" name="sizes" className="productInput" placeholder="product sizes" value={theProduct.sizes} onChange={onChange}/>
          <input type="text" name="colors" className="productInput" placeholder="product colors" value={theProduct.colors} onChange={onChange}/>
          <input type="text" name="price" className="productInput" placeholder="product price" value={theProduct.price} onChange={onChange}/>
          <input type="text" name="aviliables" className="productInput" placeholder="product aviliables" value={theProduct.aviliables} onChange={onChange}/>

          <button className="btn">{condition ? ("edit") : ("create")}</button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
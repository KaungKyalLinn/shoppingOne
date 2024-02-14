import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { dashboard, deleteProduct } from "../features/products/productsSlice";
import ProductBox from "../components/ProductBox";
import { FaEdit, FaTrash } from "react-icons/fa"
import ProductForm from "../components/ProductForm";

const Dashboard = () => {
  const {products, isLoading, isError, isSuccess, massage} = useSelector((state) => state.products)

  const {adminUser} = useSelector((state) => state.admin)

  const [createBoard, setCreateBoard] = useState(false);
  const [formCondition, setFormCondition] = useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    setFormCondition(null);
    setCreateBoard(false);
    console.log("use effect runned...")

    if(!adminUser){
      navigate("/admin/login")
    }

    if(isError){
      console.log(massage)
    }

    if(adminUser){
      dispatch(dashboard(adminUser.token))
    }


  },[adminUser, isError, isSuccess, massage, dispatch, navigate])


  const deleteTheProduct = (productId) => {
    const data = {
      productId,
      token : adminUser.token
    }
    dispatch(deleteProduct(data))
  }

  // edit board show up
  const prepareEdit = (productId) => {
    const productForEdit = products.filter((product) => product._id === productId)
    console.log("this is product for edit : " + productForEdit);
    setFormCondition(productForEdit[0])
    setCreateBoard(true);
  }

  if(isLoading){
    return(
      <div className="centerPage">
        <div>loading ...</div>
      </div>
    )
  }

  return (
    <>
      <div className="pages dashboardPage">

        <button className="createIcon" onClick={()=> {setCreateBoard(true)}}>
          +
        </button>

        {createBoard && (
          <ProductForm condition={formCondition}/>
        )}

        <div className="dashboardSection">
          {(
            products.length === 0 ? (
              <div className="productTitleDiv">
                <h1 className="productTitle">There's no products yet</h1>
              </div>
            ) : (
              <div className="productBoard">
                {(
                  products.map((product) => (
                    <div className="manageProductDiv" key={product._id}>
                      <div className="editBar">
                        <button className="icon" onClick={() => {prepareEdit(product._id)}}>
                          <FaEdit />
                        </button>
                        <button className="icon" onClick={() => {deleteTheProduct(product._id)}}>
                          <FaTrash />
                        </button>
                      </div>
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

export default Dashboard
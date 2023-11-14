import axios from "axios";

const url = "/admin/dashboard/"

const dashboard = async (token) => {
  const config = {
    headers : {
      Authorization : `Bearer ${token}`
    }

  }
  const response = await axios.get(url, config)
  console.log(response.data)
  return response.data;

}

const createProduct = async (product, token) => {
  const config = {
    headers : {
      Authorization : `Bearer ${token}`
    }
  }
  const response = await axios.post(url + "/post", product, config);
  return response.data;

}

const editProduct = async (product, id, token) => {
  const config = {
    headers : {
      Authorization : `Bearer ${token}`
    }
  }

  const response = await axios.put(url + "edit/" + id, product, config);
  return response.data;

}

const deleteProduct = async (productId,token) => {
  const config = {
    headers : {
      Authorization : `Bearer ${token}`
    }
  }

  console.log(productId)
  const response = await axios.delete(url + "edit/" + productId, config);
  return response.data;
}

const getProduct = async () => {

  const response = await axios.get("/products/")
  return response.data;

}

const productManagement = {
  dashboard,
  createProduct,
  editProduct,
  deleteProduct,
  getProduct
}

export default productManagement;
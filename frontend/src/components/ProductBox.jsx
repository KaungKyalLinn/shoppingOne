import React from 'react'

const ProductBox = ({product}) => {
  return (
    <div className='theBox'>
      <div className="boxImgDiv">
        <img src={`/upload/${product.img}`} alt="product image" className="boxImg" />
      </div>

      <h2 className='productType'>{product.type}</h2>
      <p className='productDes'>{product.description}</p>
      <p className='productDes'>{product.sizes}</p>
      <p className='productDes'>{product.colors}</p>
      <p className='productDes'>{product.price}</p>
      <p className='productDes'>{product.aviliables}</p>
    </div>
  )
}

export default ProductBox
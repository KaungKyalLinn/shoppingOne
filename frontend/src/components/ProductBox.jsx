import React from 'react'

const ProductBox = ({product}) => {
  return (
    <div className='productBox'>
      <div className="productBoxHalf">
        <div className='productAdj'>
          <div className="productImgDiv">
            <img src={`/upload/${product.img}`} alt="productImg" className="productImg" />
          </div>
          <h2 className='productType'>{product.type}</h2>
        </div>
      </div>
      <div className="productBoxHalf productBoxRight">
        <div className='productAdj'>
          <p className='productDes'>{product.description}</p>
          <p className='productDes'>{product.sizes}</p>
          <p className='productDes'>{product.colors}</p>
          <p className='productDes'>{product.price}</p>
          <p className='productDes'>{product.aviliables} aviliable</p>
        </div>
      </div>

    </div>
  )
}

export default ProductBox
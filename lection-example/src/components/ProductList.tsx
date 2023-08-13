import React, { useState } from 'react'
import ProductItem from './ProductItem'

// type Props = {
//     products: Product[];
//     onRemove: (p: Product) => void;
// }

const ProductList = ({products, onRemove}: any) => {
  return (
    <ul>
        {products.map((product: Product, i: number) => 
          <ProductItem
            key={i}
            product={product}
            onRemove={onRemove}
          />
        )}
    </ul>
  )
}

export default ProductList
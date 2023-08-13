import React, { memo } from 'react'
//import {Product} from './Product'
import { useEffect } from 'react'

type Props = {
    product: Product;
    onRemove: (p: Product) => void;
}

let prevOnRemove: any = null;

const ProductItem = ({product, onRemove}: Props) => {
  //console.log('render', product.name) //перерисовка каждый раз
  useEffect(() => {
    console.log('render', product.name)
  }, [product])

  /*if (!prevOnRemove) {
    prevOnRemove = onRemove
  }
  if (prevOnRemove) {
    console.log(prevOnRemove === onRemove)
    //debugger
  }*/

  return (
    <li>
        {product.name} -- <b>{product.price}</b> --{" "}
        <button onClick={() => onRemove(product)}>удалить</button>
    </li>
  )
}

export default ProductItem
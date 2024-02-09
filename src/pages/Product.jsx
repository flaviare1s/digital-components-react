import { useEffect, useState } from 'react'
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const { id: productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const url = new URL(`https://6597ee73668d248edf23ba81.mockapi.io/Product/${productId}`)
      const res = await fetch(url)
      const product = await res.json()

      if (product === "Not found") {
        setProduct(null)
      } else {
        setProduct(product)
      }
    }

    fetchProduct()
  }, [productId])

  return (
    <>
      <HeaderComponent />
      <div>Hello product description: {product?.name}</div>
    </>
  )
}

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
      <div className='w-full p-4 sm:p-16 sm:grid sm:grid-cols-[30%_60%] sm:gap-gap10'>
        <div className='relative pb-[100%] overflow-hidden mb-4'>
          <img className='absolute top-0 left-0 w-full object-cover' src={product?.image} alt="Product Image" />
        </div>
        <div>
          <div>
            <h1>{product?.name}</h1>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <p>${product?.price}</p>
            <button>Add to Cart</button>
          </div>
          <div>
          <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

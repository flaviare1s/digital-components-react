import { useState, useEffect } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { useDebounce } from "../../hooks/useDebouncer"
import './ProductList.css'

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("")
  const [searchType, setSearchType] = useState("")

  const debouncedSearchText = useDebounce(searchText, 300)

  useEffect(() => {
    const fetchProducts = async () => {
      const url = new URL("https://6597ee73668d248edf23ba81.mockapi.io/Product")
      url.searchParams.append("search", debouncedSearchText)
      const res = await fetch(url)
      const products = await res.json()
      console.log(products)
      if (products === "Not found") {
        setProducts([])
      } else {
        setProducts(products)
      }
    }

    fetchProducts()
  }, [debouncedSearchText])

  const productsToDisplay = products
  const totalValue = productsToDisplay.reduce((acc, item) => {
    return acc + +item.price
  }, 0)
  const totalGorgeous = productsToDisplay.filter((item) => item.type === "Gorgeous").length

  return (
    <div className="flex flex-row">
      <div className="search text-white px-8 py-4 w-64">
        <input
          type="text"
          className="w-full mb-4 text-black"
          placeholder="nome do produto"
          onChange={(ev) => {
            setSearchText(ev.target.value);
          }}
          value={searchText}
        />

        <div>
          <p>Numero de items: <span>({productsToDisplay.length})</span></p>
          <p>Valor total dos items expostos: <span>R$ ({totalValue})</span></p>
          <p>total do tipo gorgeous: <span>({totalGorgeous})</span></p>

          <button
            className='searchButton'
            onClick={() => {
              setSearchType("Gorgeous");
            }}
          >
            Filtrar por Tipo: Gorgeous{" "}
          </button>
          <button
            className='searchButton'
            onClick={() => {
              setSearchType("Intelligent")
            }}
          >
            Filtrar por Tipo: Intelligent{" "}
          </button>
          <button
            className='searchButton'
            onClick={() => {
              setSearchType("")
            }}
          >
            Limpar Filtros
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-4">
        {productsToDisplay.map((product, index) => (
          <ProductCard key={`product-${index}`} product={product} />
        ))}
      </div>
    </div>
  )
}

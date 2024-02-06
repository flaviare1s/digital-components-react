import { FooterComponent } from './components/FooterComponent/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent'
import { ProductList } from './components/ProductList/ProductList'

export function App() {

  return (
    <div className='app'>
        <HeaderComponent/>
        <ProductList/>
        <FooterComponent/>
    </div>
  )
}



import './App.css'
import { BodyComponent } from './components/BodyComponent/BodyComponent'
import { FooterComponent } from './components/FooterComponent/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent'

export function App() {

  return (
    <div className='app'>
      <div>
        <HeaderComponent/>
      </div>
      <div>
        <BodyComponent/>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>
  )
}



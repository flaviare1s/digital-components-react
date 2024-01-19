import './App.css'
import { BodyComponent } from './components/BodyComponent/BodyComponent'
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent'

export function App() {

  return (
    <div>
      <div>
        <HeaderComponent/>
      </div>
      <div>
        <BodyComponent/>
      </div>
    </div>
  )
}



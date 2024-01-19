import './App.css'
import { Component1 } from './components/Component1'
import { Component2 } from './components/Component2'

export function App() {

  return (
    <>
      <div>
        <h1>Hello, World!</h1>
        <h1 className='emoji'>😊</h1>
      </div>
      <div>
        <Component1/>
      </div>
      <div>
        <Component2/>
      </div>
    </>
  )
}



import React from 'react'
import './BodyComponent.css'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import { CTAComponent } from '../HeroComponent/HeroComponent'

export const BodyComponent = () => {
  return (
    <div className='body'>
        <h3>Este é o corpo do site</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit vero saepe, eum accusantium esse deleniti nam excepturi porro harum atque, facere molestias doloribus dolore odio consequuntur nemo sequi amet!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam deleniti laudantium aut, consequuntur amet saepe suscipit hic reiciendis expedita, recusandae distinctio? Dolorem iste enim optio qui? Fugit saepe ipsam dolor?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum, sunt cupiditate tenetur dolores veniam placeat explicabo voluptas, veritatis expedita inventore eum laudantium nesciunt quaerat optio magnam modi, minima quia.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, autem iure dicta odit optio beatae et. Placeat porro tenetur culpa optio modi perferendis molestiae, repellendus, quia nobis eius quas velit?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maiores veritatis corrupti reiciendis! Molestias doloribus eos exercitationem? Adipisci reiciendis quia libero velit quasi deserunt sed ea, voluptatibus consequuntur culpa molestias!</p>
        <div className='flex justify-between mt-8'>
          <div>
            <CTAComponent/>
          </div>
          <div className='flex justify-center'>
            <ButtonComponent text={ 'Botão 1' } />
            <ButtonComponent text={ 'Botão 2' } />
          </div>
        </div>
    </div>
  )
}


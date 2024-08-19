import './index.scss'

import { useState } from 'react'

export default function Contador() {
    const [contador, setContador] = useState(0)
    
    function aumentar () {

        if (contador < 10) {
        setContador(contador + 1)
        }
       }
    
       function diminuir () {
    
        if (contador > 0 ) {
        setContador(contador - 1)
        }
       }
    
    return (
        <div className='comp-contador'>
             <div className='cont'>
                <button onClick = {aumentar} >+</button>
                {contador}
                <button onClick = {diminuir} >-</button>
                </div>
        </div>
    )
}
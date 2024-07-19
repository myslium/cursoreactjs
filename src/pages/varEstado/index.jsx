import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { tratarNumber } from '../../utils/conversao'


export default function VarEstado() {

   const [contador, setContador] = useState(0)
   const [tituloS2, setTituloS2] = useState ('Oii')
   const [tituloS3, setTituloS3] = useState('Escolha um item') 
   const [opcao, setOpcao] = useState(true)
   const [titulos4, setTitulos4] = useState('Oie')
   const [descricao, setDescricao] = useState('Oie')

   const [num1, setNum1] = useState(0)
   const [num2, setNum2] = useState(0)
   const [res, setRes] = useState(0)

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

   function somar () {
       let soma =tratarNumber(num1) + tratarNumber(num2)
       setRes(soma)
   }

   function subtrair() {
    let sub = tratarNumber(num1) - tratarNumber(num2)
    setRes(sub)
}

    function mult() {
    let multi = (tratarNumber(num1)) * (tratarNumber(num2))
    setRes(multi)
    }

    
    function dividir() {
        let divir = (tratarNumber(num1)) / tratarNumber(num2)
        setRes(divir)
 }
   
    function pot() {
    let pote = tratarNumber(num1) ** (tratarNumber(num2))
    setRes(pote)
}

    return (
        <div className='pagina-varestado'>
            <header className='cabecalho'>
                <Link to = '/'>
                <i className='fa fa-arrow-left'></i>
                </Link>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <section className='secao'>
                <h1>Calculadora</h1>

                <div className='entrada'>
                    <input type = 'text' value={num1} onChange={e => setNum1(e.target.value)}/>
                    <input type = 'text' value={num2} onChange={e => setNum2(e.target.value)}/>
                    <div>=</div>
                    <div className='res'> {res} </div>
                </div>
                <br /><br />
                <button  onClick={somar}>Somar</button>
                <button  onClick={subtrair}>Subtrair</button>
                <button  onClick={mult}>Multiplicar</button>
                <button  onClick={dividir}>Divisão</button>
                <button  onClick={pot}>Potência</button>
                
            </section>

            <section className='secao'>
                <h1>Contador</h1>
                
                <div className='cont'>
                <button onClick = {aumentar} >+</button>
                {contador}
                <button onClick = {diminuir} >-</button>
                </div>
            </section>

            <section className='secao'> 
                <h1>{tituloS2}</h1>
                <input type = 'text' value={tituloS2} onChange={e => setTituloS2(e.target.value)}/>
            </section>

            <section className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>JavaScript</option>
                    <option>Html/CSS</option>
                    <option>ReactJS</option>
                </select>
            </section>

            <section className='secao'>
                <h1>Programar é lindezinha? {opcao ? 'Sim' : 'Não'}</h1>
                <input type = 'checkbox' checked = {opcao} onChange={ e =>  setOpcao(e.target.checked)}/> Programar é lindezinha?

            </section>

            <section className='secao'>
                <h1>{titulos4}</h1>
                <input type = 'text' value = {descricao} onChange={e  => setDescricao(e.target.value)}/>
                <br /><br />
                <button onClick={() => setTitulos4(descricao)}>Alterar</button>
            </section>
        </div>
    )
}
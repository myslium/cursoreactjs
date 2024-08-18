import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { tratarNumber } from '../../utils/conversao'
import { calcularTotalIngresso } from '../services/ingressos'

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

   const [qtdIng, setQtdIng] = useState(0)
   const [meioIng, setMeioIng] = useState(0)
   const [cupom, setCupom] = useState('')
   const [totalIng, setTotalIng] = useState(0)

   const [novaMeta, setNovaMeta] = useState('')
   const [listaMetas, setListaMetas] = useState([])
   const [editando, setEditando] = useState(-1)

   const [plano, setPlano] = useState('')
   const [situacao, setSituacao] = useState('')
   const [cor, setCor] = useState('')
   const [listaPlanos, setListaPlanos] = useState([])




   {/*function objetos ( ) {

    let pessoa = {
        nome: 'Bruno',
        job: 'Dev',
        tempo: '20 anos'
    }

    let pessoa2 = {
        nome: 'mari',
        job: 'linda',
        tempo: '17 anos mto gostosa'
    }

    let pessoas = [pessoa, pessoa2]

    alert(pessoa.nome)
   }*/}

   function adicionarPlano () {
      let novoPlano = {
        titulo: plano,
        caso: situacao,
        visual: cor
      }

      setListaPlanos([...listaPlanos, novoPlano])

        setPlano('')
        setSituacao('')
        setCor('')
   }

   function adicionarMeta () {


    if (novaMeta != '') {

        if (editando === -1) {
    setListaMetas([...listaMetas, novaMeta])
    setNovaMeta('')
    }

    else {
        listaMetas[editando] = novaMeta
        setListaMetas([...listaMetas])
        setNovaMeta('')
        setEditando(-1)
    }
    
    }
   }

   function teclaApertada (e) {
      if (e.key === 'Enter') {
        adicionarMeta()
      }
   }

   function removerMeta (idx) {
     listaMetas.splice(idx,1)
     setListaMetas([...listaMetas])
   }

   function alterarMeta(idx) {
    setNovaMeta(listaMetas[idx])
    setEditando(idx)
   }

   
   function calcularIngresso () {
    let tot = calcularTotalIngresso(qtdIng, meioIng,cupom)
    setTotalIng(tot)
   }


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
        <div className='pagina pagina-varestado'>
            <header className='cabecalho'>
                <Link to = '/'>
                <i className='fa fa-arrow-left'></i>
                </Link>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <section className='secao-planos'>
                <h1>Meus planos atuais</h1>

                <div className='entrada'>
                    <input type='text' placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)}/>
                    <input type='text' placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)}/>
                    <input type='text' placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)}/>
                    <button onClick={adicionarPlano}>Adicionar plano</button>


                </div>

                <div className='lista'>
                    {listaPlanos.map((item, idx) =>
                          <div className='plano' key = {idx}>
                          <br />
                      <div style={{backgroundColor: item.visual}}> </div>
                      <br />
                          <h1>{item.titulo}</h1>
                          <h2>{item.caso}</h2>
                          
                      </div>
                    )}
                    
                </div>

        

    
           
            </section>


            <section className='secao-metas'>
                <h1>Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type = 'text' placeholder='Digite a sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)}/>
                    <button onClick={adicionarMeta}>Adicionar</button>
                </div>

                <ul>
                {listaMetas.map((item, idx) =>
                    <li key={idx}> 
                        <i className='fa fa-pen-to-square' onClick={() => alterarMeta(idx)}></i>
            
                        <i className='fa fa-trash-can' onClick={() => removerMeta(idx)}></i>
                        {item}
                        
                        
                        </li>
                )}
                </ul>
                
            </section>

            <section className='secao-ing'>
                <h1>Venda de Ingressos</h1>

                <div className='entrada'>
                    <div>
                        <label>Quantidade:</label>
                        <input type = 'text' value={qtdIng} onChange={e => setQtdIng(e.target.value)}/>
                    </div>

                    <div>
                        <label>Meia entrada:</label>
                        <input type='checkbox' checked={meioIng} onChange={e => setMeioIng(e.target.checked)}/>

                    </div>

                    <div>
                    <label>Cupom:</label>
                    <input type = 'text'  value={cupom} onChange={e => setCupom(e.target.value)}/>
                    </div>
                     <div>
                        <label></label>
                        <button onClick={calcularIngresso}>Calcular</button>
                     </div>
                   
                    <div>
                        O total é R$ {totalIng}
                    </div>
                </div>
            </section>

            <section className='secao-calc'>
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
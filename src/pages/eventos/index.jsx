import './index.scss';

import Cabecalho from '../../components/cabecalho';

export default function Eventos() {

    function clicou () {
        alert('Oie, o usuário acaba de clicar')
    }
   
    function movimentouMouse () {
        alert('Oie, o usuário acaba de movimentar o mouse!')
    }

    function alterouValor (e) {
        let novoValor = e.target.value
        alert(`Oie, o usuário acaba de alterar o valor do input ${novoValor}`)
    }

    function alterouCheck (e) {
        let novoValor = e.target.checked;
        alert(`Oie, o usuário acaba de alterar o valor do input[checkbox/radio] ${novoValor}`)

    }

     return (
        <div className='pagina pagina-eventos'>
           
           <Cabecalho/>
            <section className='secao'>
                <h1> Entendendo eventos</h1>

                <p onClick = {clicou} onMouseMove={movimentouMouse} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem maxime? Et ullam dignissimos optio obcaecati necessitatibus quas odit libero eligendi eum tempore saepe, similique voluptate inventore sed, expedita deserunt.</p>

                <input onChange={alterouValor} type = 'text' placeholder='Digite aqui alguma coisa'/>
                
                <textarea onChange={alterouValor}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo, nostrum ipsum dignissimos omnis dolor, rem vero delectus iste quam harum cumque in itaque labore quidem minus quaerat atque pariatur.
                </textarea>
                <select>
                    <option> Selecione</option>
                    <option> Item A</option>
                    <option> Item B</option>
                </select>

                <div className='grupo'>
                    
                    <input type = 'checkbox' onChange={alterouCheck} /> Opcão 1
                    <input type = 'checkbox' onChange={alterouCheck}/> Opção 2
                    
                </div>

                <div className='grupo'>
                    <div>
                    <input type = 'radio' name='gpo' onChange={alterouCheck}/> Opcão 1
                    </div>
                    <div>
                    <input type = 'radio' name = 'gpo' onChange={alterouCheck}/> Opção 2
                    </div>
                </div>

                <button onClick = {clicou}  > Clique aqui</button>
            </section>
        </div>
     )
}
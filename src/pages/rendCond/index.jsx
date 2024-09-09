import './index.scss'

import Cabecalho from '../../components/cabecalho'
import CartaoFilme from '../../components/cartaoFilme';
import { useState } from 'react';

export default function RenderizacaoCondicional() {

    const [mensagem, setMensagem] = useState(false);
    const [nomeFilme, setNomeFilme] = useState('')
    const [classificacaoFilme, setClassificacaoFilme] = useState('')
    const [urlFilme, setUrlFilme] = useState('')
    const [listaFilmes, setListaFilmes] = useState([])
    const [estreia, setEstreia] = useState('')
    const [destaque, setDestaque] = useState(false)
    


    function adicionarFilme() {
        if (nomeFilme == '' || classificacaoFilme == '' || urlFilme == '') {
            alert('Preencha todos os campos!')
            return
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme,
            estreia: estreia,
            destaque: destaque
        }

        setListaFilmes([...listaFilmes, novoFilme])
        setNomeFilme('')
        setClassificacaoFilme('')
        setUrlFilme('')
        setEstreia('')
        setDestaque(false)
    }



    function biscoito() {
        setMensagem(!mensagem)
    }
    return (
        <div className='pagina rende-cond'>
            <Cabecalho h1 = 'Renderização Condicional'/>

            <div className='secao'>
                <h1> Biscoito da sorte</h1>
                <button onClick={biscoito}>{mensagem == true ? 'Fechar' : 'Abrir'}</button>

                {
                    mensagem == true &&
                    <p className='mensagem-biscoito'>
                    "Sempre haverá pessoas melhores e piores em habilidades diferentes. Avançe e ajude. "
                    </p>
                }
               
            </div>

            <div className='secao secao-filmes'>
                <h1>Catálogo de filmes</h1>

                <div className='entrada'>
                <input type = 'text' placeholder='Nome do filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)}/>
                <input type = 'text' placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)}/>
                <input type = 'text' placeholder='Url da capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)}/>
                <input type="text" placeholder='Estreia do Filme' value= {estreia} onChange={e =>
                    setEstreia(e.target.value)
                }/>
                <div>

                <input type="checkbox"  checked= {destaque} onChange={e =>
                    setDestaque(e.target.checked)
                }/>
                <label>Destaque</label>
                </div>
                
                <button onClick={adicionarFilme}>Adicionar</button>

                </div>

                <div className='lista'>
                    {listaFilmes.map (item =>
                        <CartaoFilme
                        item = {item}
                        />
                    )}
                </div>

              
            </div>
        </div>
    )
}
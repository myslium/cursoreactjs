import './index.scss'

import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'
import Contador from '../../components/contador'
import ItemMeta from '../../components/itemMeta'
import ItemPlano from '../../components/itemPlano'
import CartaoFilme from '../../components/cartaoFilme'


export default function Comps() {

    const [novaMeta, setNovaMeta] = useState('')
    const [listaMetas, setListaMetas] = useState([])
    const [editando, setEditando] = useState(-1)

    const [plano, setPlano] = useState('')
    const [situacao, setSituacao] = useState('')
    const [cor, setCor] = useState('')
    const [listaPlanos, setListaPlanos] = useState([])

    const [nomeFilme, setNomeFilme] = useState('')
    const [classificacaoFilme, setClassificacaoFilme] = useState('')
    const [urlFilme, setUrlFilme] = useState('')
    const [listaFilmes, setListaFilmes] = useState([])


    function adicionarFilme() {
        if (nomeFilme == '' || classificacaoFilme == '' || urlFilme == '') {
            alert('Preencha todos os campos!')
            return
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme
        }

        setListaFilmes([...listaFilmes, novoFilme])
        setNomeFilme('')
        setClassificacaoFilme('')
        setUrlFilme('')
    }


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
    



    return (
        <div className='pagina-comps'>
            <Cabecalho h1 = "ReactJS | Componentes"/>

            <div className='secao secao-filmes'>
                <h1>Catálogo de filmes</h1>

                <div className='entrada'>
                <input type = 'text' placeholder='Nome do filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)}/>
                <input type = 'text' placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)}/>
                <input type = 'text' placeholder='Url da capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)}/>
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
                          <ItemPlano
                          
                          item = {item}/>
                    )}
                    
                </div>

    
           
            </section>

            <div className='secao'>
                <h1>Transformando o contador em componente</h1>

               <Contador/>
               <Contador/>
             
            </div>

            <section className='secao-metas'>
                <h1>Transformando os itens da lista de metas em componentes</h1>

                <div className='entrada'>
                    <input type = 'text' placeholder='Digite a sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)}/>
                    <button onClick={adicionarMeta}>Adicionar</button>
                </div>

                <ul>
                {listaMetas.map((item, idx) =>
                     

                       <ItemMeta
                         item = {item}
                         idx = {idx}
                         removerMeta= {removerMeta}
                         alterarMeta= {alterarMeta}
                       />
                    
                )}
                </ul>
                
            </section>

        </div>
    )
}
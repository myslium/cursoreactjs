import './index.scss'


export default function CartaoFilme(props) {

    function idenCla() {
        if(props.item.classificacao == 'L') 
            return 'c-l'
        else if (props.item.classificacao == '10')
            return 'c-10'
        else if (props.item.classificacao == '12')
            return 'c-12'
        else if (props.item.classificacao == '14')
            return 'c-14'
        else if (props.item.classificacao == '16')
            return 'c-16'        
         else if (props.item.classificacao == '18')
            return 'c-18'

    }

    return (
        <div className='comp-cartao-filme'>
            <img src = {props.item.url} />


            {
                props.item.estreia != '' && 
            <div className='estreia'>
                {
                    props.item.destaque == true && 
                    <i className='fa fa-star estrela'></i>
                }
              
                Estriea {props.item.estreia}
            </div>
            }
            
            <p>{props.item.nome}</p>
            <div className={'classificacao ' + idenCla()}> {props.item.classificacao} </div>
        </div>
    )
}
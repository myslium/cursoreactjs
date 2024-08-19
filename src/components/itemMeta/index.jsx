import './index.scss'


export default function ItemMeta(props) {

    /* 
    se a função não está no componente, usamos o props
    */
    return (

        <li className='comp-itemmeta'>

            <i className='fa fa-pen-to-square' onClick={() => props.alterarMeta(props.idx)}></i>
            <i className='fa fa-trash-can' onClick={() => props.removerMeta(props.idx)}></i>
            {props.item}


        </li>
    )
}
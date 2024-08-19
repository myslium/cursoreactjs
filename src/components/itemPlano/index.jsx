import './index.scss'



export default function ItemPlano(props) {


    return (
        <div className='comp-item-plano'>
        <br />
        <div style={{backgroundColor: props.item.visual}}> </div>
        <br />
        <h1>{props.item.titulo}</h1>
        <h2>{props.item.caso}</h2>
        
    </div>
    )
}
import {ItemContainer} from './styles'

function ItemList() {
  return (
    <ItemContainer>
        <h3>Sara</h3>
        <p>Nao sei e isso ai</p>
        <a className='ver' href="#">Ver repositório</a>
        <a className='remover' href="#">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemList
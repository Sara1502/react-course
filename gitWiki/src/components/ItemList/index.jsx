import {ItemContainer} from './styles'

function ItemList({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a className='ver' href={repo.html_url} target='_blank'>Ver repositório</a>
        <a className='remover' href='#' onClick={handleRemove}>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemList
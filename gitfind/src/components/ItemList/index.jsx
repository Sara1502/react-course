import './style.css';

function ItemList({tite, description}) {
    return (
        <div className='item-list'>
            <strong>{tite}</strong>
            <p>{description}</p>
            <hr />
        </div>
    )
}

export {ItemList};
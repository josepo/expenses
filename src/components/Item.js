import './Item.css';

function Item({ date, title, amount })
{
   return (
      <div className='item'>
         <div className='item__date'>{ date.toISOString().split('T')[0] }</div>
         <div className='item__title'>{ title }</div>
         <div className='item__price'>{ amount }</div>
      </div>
   );
}

export default Item;
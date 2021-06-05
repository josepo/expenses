import './Item.css';

function Item({ date, title, amount })
{
   return (
      <div className='item'>
         <div className='item__date'>
            <div>{ date.toLocaleString('en-US', { month: 'long' }) }</div>
            <div>{ date.toLocaleString('en-US', { day: '2-digit' }) }</div>
            <div>{ date.getFullYear() }</div>
         </div>
         <div className='item__title'>{ title }</div>
         <div className='item__price'>{ amount }</div>
      </div>
   );
}

export default Item;
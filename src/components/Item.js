import './Item.css';

function Item()
{
   return (
      <div className='item'>
         <div className='item__date'>Date</div>
         <div className='item__title'>Title</div>
         <div className='item__price'>Amount</div>
      </div>
   );
}

export default Item;
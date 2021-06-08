import './Card.css';

const Card = ({ className, children }) =>
{
   const css = 'card ' + className;

   return (
      <div className={ css }>
         { children }
      </div>
   );
}

export default Card;
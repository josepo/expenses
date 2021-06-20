import './ChartBar.css';

const ChartBar = ({ label, value, max }) => 
{
   const height = max > 0 ?
      Math.round(value * 100 / max) + '%' :
      '0%';
   
   return (
      <div className='chart-bar'>
         <div className='chart-bar__inner'>
            <div 
               className='chart-bar__fill'
               style={ { height: height }} />
         </div>
         <div className='chart-bar__label'>
            { label }
         </div>
      </div>
   );
}

export default ChartBar;
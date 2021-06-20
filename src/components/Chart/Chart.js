import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ points }) => 
{
   const values = points.map(point => point.value);
   const max = Math.max(...values);

   return (
      <div className='chart'>
      {
         points.map(point => 
            <ChartBar
               key={ point.label }
               label={ point.label }
               value={ point.value }
               max={ max } />
         )
      }
      </div>
   );
}

export default Chart;
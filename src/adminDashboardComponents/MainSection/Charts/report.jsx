import {Line, Bar} from 'react-chartjs-2';
import { Chart as ChartJS,
            CategoryScale,
            LinearScale,
            BarElement,
            LineElement,
            Tooltip,
            Legend
 } from 'chart.js/auto';

 ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Tooltip, Legend);

function LineChart (){

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
        datasets: [{
            label: 'Income',
            data:[8000, 20000, 38000, 11000,42000, 32000, 55000],
            borderColor: 'rgba(99,19,255,0.7)',
            backgroundColor: 'rgba(99,19,255,0.7)',
            tension: 0.4,
        },
        {
            label: 'Expenses',
            data: [52000, 34000, 23000, 45000, 28000, 60000, 42000],
            borderColor: 'rgba(0, 255, 0, 0.7)',
            backgroundColor: 'rgba(0, 255, 0, 0.7)',
            tension: 0.4,
        }
        ]
    };

    return (
        <div className="flex gap-5 mt-5">
            <div className='w-[50%]'>
                <h2 className='font-semibold text-xl'>Revenue Performance</h2>
                <Line data={data} />

            </div>
            <div className='w-[50%]'>
                <h2 className='font-semibold text-xl'>Grocery Deals</h2>
                <Bar data={data} />
            </div>
        </div>
    )

}

export default LineChart;
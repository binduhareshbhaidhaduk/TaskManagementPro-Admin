import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the CategoryScale
ChartJS.register(
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
  );

  const LineChart = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'bar',
          label: 'Project-1',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'hsla(43, 76%, 80%, 0.100)',
          borderColor: 'hsla(43, 76%, 80%, 1)',
          borderWidth: 1,
          barThickness: 50,
        },
        {
          type: 'line',
          label: 'Project-2',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 8,
        },
        {
          type: 'line',
          label: 'project-3',
          fill:false,
          data: [75, 65, 75, 91, 66, 55, 40],
          backgroundColor: 'rgba(100, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 8,
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: false,
          beginAtZero: true,
        },
      },
    };
  
    return <Line data={data} options={options} />;
  };
  
  
  export default LineChart;
  
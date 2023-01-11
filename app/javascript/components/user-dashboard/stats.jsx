import React, {useEffect} from 'react';
import { format, parseISO } from 'date-fns';
import { useLoaderData } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';


export async function loader() {
  const URL = `/api/v1/scores`;
  try {
    let response = await fetch(URL);
    let scores = await response.json();
    return scores;
  } catch (error) {
    console.error(error);
  }
}

export default function DailyBookings() {
  const scores = useLoaderData();
  const [rounds, setRounds] = React.useState([]);

  const Api = async () => {
    const URL = "/api/v1/scores/rounds_per_month";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setRounds(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Api();
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Scores',
      },
    },
    scales: {
      y: {
        min: 40,
        max: 120
      }
    }
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Rounds Per Month',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 30
      }
    }
  }

  const data = {
    labels: scores.map(score => format(parseISO(score.date), 'PP')),
    datasets: [
      {
        fill: true,
        label: 'Per Day',
        data: scores.map(score => score.score),
        borderColor: 'rgb(26, 135, 83)',
        backgroundColor: 'rgba(26, 135, 83, 0.5)',
      },
    ],
  };

  const barData = {
    labels: rounds.map(round => format(parseISO(round.month), 'PP')),
    datasets: [
      {
        fill: true,
        label: 'Per Month',
        data: rounds.map(round => round.count),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className='stats-data-container'>
      <div className='line-chart'>
        <Line options={options} data={data} />
      </div>
      <div className='bar-chart'>
        <Bar options={barOptions} data={barData} />
      </div>
    </div>
  )
}

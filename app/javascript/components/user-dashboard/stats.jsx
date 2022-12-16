import React from 'react';
import { format, parseISO } from 'date-fns';
import { useLoaderData } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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

  return (
    <Line options={options} data={data} />
  )
}

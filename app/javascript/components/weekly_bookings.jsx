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
  const URL = `/api/v1/dashboards/weekly`;;
  try {
    let response = await fetch(URL);
    let bookings = await response.json();
    return bookings;
  } catch (error) {
    console.error(error);
  }
}

export default function WeeklyBookings() {
  const bookings = useLoaderData();

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
        text: 'Weekly Bookings',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 200
      }
    }
  }

  const data = {
    labels: bookings.map(booking => format(parseISO(booking.week), 'PP')),
    datasets: [
      {
        fill: true,
        label: 'Per Week',
        data: bookings.map(booking => booking.count),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  )
}

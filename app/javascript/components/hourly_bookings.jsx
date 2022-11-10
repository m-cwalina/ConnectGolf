import React from 'react';
import { format, parseISO } from 'date-fns';
import { useLoaderData } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


export async function loader() {
  const URL = `/api/v1/dashboards/hourly`;
  try {
    let response = await fetch(URL);
    let bookings = await response.json();
    return bookings;
  } catch (error) {
    console.error(error);
  }
}

export default function HourlyBookings() {
  const bookings = useLoaderData();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Hourly Bookings',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10
      }
    }
  }

  const data = {
    labels: bookings.map(booking => format(parseISO(booking.hour), 'h:mm aaaa')),
    datasets: [
      {
        fill: true,
        label: 'Per Hour',
        data: bookings.map(booking => booking.count),
        backgroundColor: 'rgba(26, 135, 83, 0.5)',
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}

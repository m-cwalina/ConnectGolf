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
  const URL = `/api/v1/dashboards/yearly`;
  try {
    let response = await fetch(URL);
    let bookings = await response.json();
    return bookings;
  } catch (error) {
    console.error(error);
  }
}

export default function YearlyBookings() {
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
        text: 'Yearly Bookings',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 1000
      }
    }
  }

  const data = {
    labels: bookings.map(booking => format(parseISO(booking.year), 'yyyy')),
    datasets: [
      {
        fill: true,
        label: 'Per Year',
        data: bookings.map(booking => booking.count),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}

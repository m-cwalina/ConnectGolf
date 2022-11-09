import React, { useEffect } from 'react';
import { format, parseISO } from 'date-fns';
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


export default function DailyBookings() {
  const [bookings, setBooking] = React.useState([]);

  const Api = async () => {
    const URL = `/api/v1/dashboards/daily_bookings`;
    try {
      let response = await fetch(URL);
      let data = await response.json();
        return setBooking(data);
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    Api()
  }, []);


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
        text: 'Daily Bookings',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 50
      }
    }
  }

  const data = {
    labels: bookings.map(booking => format(parseISO(booking.time), 'PP')),
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
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

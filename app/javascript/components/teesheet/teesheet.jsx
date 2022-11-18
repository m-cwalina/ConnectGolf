import React from 'react';
import Calendar from '../teetimes/calendar';
import { format, parseISO } from 'date-fns';
import { useLoaderData, Link, Outlet } from "react-router-dom";
import { IoTimerOutline, IoPeopleOutline, IoPersonOutline } from "react-icons/io5";

export async function loader() {
  const URL = `/api/v1/tee_times/teesheet`;
  try {
    let response = await fetch(URL);
    let teetimes = await response.json();
    return teetimes;
  } catch (error) {
    console.error(error);
  }
}

export default function TeeSheet() {
  const teetimes = useLoaderData();
  const [selected, setSelected] = React.useState(Date.now());

  const searchTeeTimes = teetimes.filter(
    teetime => format(parseISO(teetime.time), 'MM/dd/yyyy').includes(format(selected, 'MM/dd/yyyy'))
  )

  const renderList = () => {
    return searchTeeTimes.map((teetime) => {
      return (
        <ul className='teesheet' key={teetime.id}>
          <div className='teesheet-total'>
            <div className='teesheet-icon'><IoTimerOutline /></div>
            <div className='teesheet-info'> {format(parseISO(teetime.time), 'h:mm a')}</div>
          </div>
          <div className='teesheet-total'>
            <div className='teesheet-icon'><IoPeopleOutline /></div>
            <div className='teesheet-info'> {(teetime.players.length > 0) ? (teetime.players.map(player => player.size)) : ("0")} players</div>
          </div>
          <div className='teesheet-total'>
            <div className='teesheet-icon'><IoPersonOutline /></div>
            <div className='teesheet-info'> {(teetime.users.length > 0) ? (teetime.users.map(user => user.name)) : ("No Players")}</div>
          </div>
          <div className='teesheet-info'>
            <Link to={`${teetime.id}`} className="btn btn-outline-success btn-lg">Check In</Link>
          </div>
        </ul>
      );
    });
  };

  return (
    <div>
      <div className="date-picker">
        <Calendar selected={selected} setSelected={setSelected} />
      </div>
      <div className="teesheet-container">
        <div>{renderList()}</div>
      </div>
      <div className="checkin-popup-container">
        <Outlet />
      </div>
    </div>
  )
}

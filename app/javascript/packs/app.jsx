import React, { useEffect } from 'react';
import Calendar from '../components/teetimes/calendar';
import NoTeeTime from '../components/errors-blanks/no_teetime'
import { format, parseISO } from 'date-fns';
import { IoAlarm, IoFlagOutline, IoGolf } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";



export default function App() {
  const [teeTimes, setTeeTimes] = React.useState([])
  const [selected, setSelected] = React.useState(Date.now());

  /*A fetch call to return tee times from api*/
  const Api = async () => {
    const URL = "/api/v1/tee_times";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
      setTeeTimes(data);
    } catch (error) {
      console.error(error);
    }
  };

  /*I use this function to call the Api*/
  useEffect(() => {
    Api();
  }, []);

  const searchTeeTimes = teeTimes.filter(
    teetime => format(parseISO(teetime.time), 'MM/dd/yyyy').includes(format(selected, 'MM/dd/yyyy'))
  )

  const renderList = () => {
    if (searchTeeTimes.length >= 1) {
      return searchTeeTimes.map((teetime) => {
        return (
          <div key={teetime.id} className="tiles">
            <div>
              <div className="tile">
                <p className="tile-info"><IoAlarm className="icon" /> {format(parseISO(teetime.time), 'h:mm a')}</p>
                <p className="tile-info"><IoFlagOutline className="icon" /> {format(parseISO(teetime.time), 'PP')}</p>
                <p className="tile-info"><IoGolf className="icon" /> {teetime.players} players</p>
                <div className="tile-info-button">
                  <Link to={`${teetime.id}/bookings`} className="btn btn-outline-success btn-lg">Book</Link>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <NoTeeTime />
    }
  };


  return (
    <div className="App">
      <div className='calendar'>
        <Calendar selected={selected} setSelected={setSelected} />
      </div>
      <div className="teetime-list">
        {teeTimes.length == 0 ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div> : (<div>{renderList()}</div>)}
      </div>
      <div className="checkin-popup-container">
        <Outlet />
      </div>
    </div>
  )
}

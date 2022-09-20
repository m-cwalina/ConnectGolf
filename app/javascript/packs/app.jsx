import React, { useEffect, useState } from 'react';
import TeeTimes from '../components/teetimes';
import DayPicker from '../components/daypicker';


export default function App() {
  const [teeTimes, setTeeTimes] = useState([])

  /*A fetch call to return tee times from api*/
  const Api = async () => {
    const URL = "/api/v1/tee_times";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setTeeTimes(data);
    } catch (error) {
      console.error(error);
    }
  };

  /*I use this function to call the Api*/
  useEffect(() => {
    Api();
  }, []);

  return (
    <div className="App">
      <div className="DayPicker">
        <DayPicker />
      </div>
      <div className="TeeTime-List">
        <TeeTimes teetimes={teeTimes} />
      </div>
    </div>
  )
}

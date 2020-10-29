import React, { useState, useEffect } from "react"
import  DayList  from 'components/DayList.js'
import Appointment from 'components/Appointment';
import axios from 'axios';


import "components/Application.scss";



const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 7,
    time: "4pm",
    interview: {
      student: "Amanda Arnaut Alliegro",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 8,
    time: "5pm",
    interview: {
      student: "Luiz Eduardo Villodre Alliegro",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];




export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios
      .get('/api/days')
      .then(res => {
        setDays([...res.data]);
      })
  }, []);
  
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} day={day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      
      <section className="schedule">
        {appointments.map(appointment => {
          return <Appointment key={appointment.id} {...appointment} />
        })}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
    
  );
}

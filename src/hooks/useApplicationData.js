import { useState, useEffect } from 'react';
import axios from 'axios';


import { getAppointmentsForDay } from '../helpers/selectors'
export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
      .then(all => {
        setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      });
  }, []);
  

  function bookInterview(id, interview) {
    let days = [...state.days];
    if (!state.appointments[id].interview) {
      const day = { ...days.find(elem => elem.appointments.includes(id)) };
      day.spots--;
      days = days.map(elem => {
        if (elem.name === state.day) {
          return day;
        }
        return elem;
      })
    }
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState(prev => ({ ...prev, appointments, days }));
      });
  };

  function cancelInterview(id) {
    const day = { ...state.days.find(elem => elem.appointments.includes(id)) };
    day.spots++;
    const days = [...state.days].map(elem => {
      if (elem.name === state.day) {
        return day;
      }
      return elem;
    })

    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState(prev => ({ ...prev, appointments, days }));
        
      });
  };



  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}
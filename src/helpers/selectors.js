export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(elem => elem.name === day)
  const appointments = filteredDay ? filteredDay.appointments.map(elem => state.appointments[elem]) : [];
  return appointments;
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find(elem => elem.name === day)
  const interviewers = filteredDay ? filteredDay.interviewers.map(elem => state.interviewers[elem]) : [];
  return interviewers;
}

export function getInterview(state, interview) {
  if (interview) {
    const newInterview = { ...interview };
    newInterview.interviewer = state.interviewers[newInterview.interviewer]
    return newInterview;
  }
  return null;

}
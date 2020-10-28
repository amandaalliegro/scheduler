import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button'

const Form = props => {

const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);

const reset = () => {
  setName("")
  setInterviewer(null)
}

const cancel = () => {
  reset();
  props.onCancel();
}

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={props.name}
          />
        </form>

        <InterviewerList
          interviewers={props.interviewers}
          interviewer={props.interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
    
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form; 
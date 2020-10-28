import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button'

const Form = props => {

  const [name, setName] = useState("")
  const [interviewer, setInterviewer] = useState(null)


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={props.name}
          // onChange={handleInput}
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
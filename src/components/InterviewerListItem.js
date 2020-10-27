import React from "react";
import classNames from 'classnames/bind';
import "components/InterviewerListItem.scss";

export default function InterviewerListItem (props) {
  const interviewersData = classNames("interviewers__item", {
    'interviewers__item--selected': props.selected
  });

  return (
    <li className={interviewersData} onClick={props.setInterviewer}>
      <img
        className='interviewers__item-image'
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};
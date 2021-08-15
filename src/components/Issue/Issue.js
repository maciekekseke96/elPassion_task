import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Issue.scss';

const Issue = ({ issue }) => {
  return (
    <div className="issue">
      <span>{issue.description}</span>
      <FontAwesomeIcon
        icon={faStar}
        color={issue.status === 'done' ? '#21233d' : '#cfcfcf'}
        onClick={() => console.log('handle')}
      />
    </div>
  );
};

export default Issue;

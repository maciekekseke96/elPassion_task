import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { findIssueById } from '../../utils/utils';
import './Issue.scss';

const Issue = ({ issue, currentIssues, setIssues }) => {
  const updateIssues = () => {
    const issuesToUpdate = [...currentIssues];
    const foundIssue = findIssueById(issuesToUpdate, issue.id);

    issuesToUpdate[foundIssue.id] = {
      ...foundIssue.issue,
      status: foundIssue.issue.status === 'open' ? 'done' : 'open',
    };

    setIssues(issuesToUpdate);
  };
  return (
    <div className="issue">
      <span>{issue.description}</span>
      <FontAwesomeIcon
        icon={faStar}
        color={issue.status === 'done' ? '#21233d' : '#cfcfcf'}
        onClick={() => updateIssues()}
      />
    </div>
  );
};

export default Issue;

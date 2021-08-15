import React from 'react';
import Issue from '../Issue/Issue';
import './IssuesList.scss';

const IssuesList = ({ date, issues }) => {
  return (
    <div className="issues-list">
      <span className="issues-date">{date}</span>
      {issues.map((issue, id) => {
        return <Issue key={id} issue={issue} />;
      })}
    </div>
  );
};

export default IssuesList;

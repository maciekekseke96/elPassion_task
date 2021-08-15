import React from 'react';
import Issue from '../Issue/Issue';
import './IssuesList.scss';

const IssuesList = ({ date, issues, currentIssues, setIssues, filter }) => {
  const issuesToRender = issues.filter((issue) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'open') {
      return issue.status === 'open';
    } else if (filter === 'closed') {
      return issue.status === 'done';
    }
    return true;
  });
  return (
    <div className="issues-list">
      {issuesToRender.length?<span className="issues-date">{date}</span>:null}
      {issuesToRender.map((issue, id) => {
        return (
          <Issue
            key={id}
            issue={issue}
            currentIssues={currentIssues}
            setIssues={setIssues}
          />
        );
      })}
    </div>
  );
};

export default IssuesList;

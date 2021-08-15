import React from 'react';
import IssuesList from './../IssuesList/IssuesList';
import { removeDuplicates } from '../../utils/utils';
import './MainSection.scss';

const MainSection = ({ issues }) => {
  const dates = removeDuplicates(issues.map((issue) => issue.date));

  return (
    <div className="main-section">
      {dates.map((date, id) => {
        return (
          <IssuesList
            key={id}
            date={date}
            issues={issues.filter((issue) => issue.date === date)}
          />
        );
      })}
    </div>
  );
};

export default MainSection;

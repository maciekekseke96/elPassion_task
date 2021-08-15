import React from 'react';
import CustomFilter from '../CustomFilter/CustomFilter';
import { ReactComponent as AllIcon } from './../../assets/icon-github.svg';
import { ReactComponent as OpenIcon } from './../../assets/icon-open-issue.svg';
import { ReactComponent as ClosedICon } from './../../assets/icon-closed-issue.svg';
import { countSpecificIssues } from '../../utils/utils';
import './Navigation.scss';

const Navigation = ({ filter, setFilter, issues }) => {
  return (
    <div className="navigation-container">
      <CustomFilter
        icon={AllIcon}
        description={'All'}
        number={countSpecificIssues('all', issues)}
        selected={filter === 'all'}
        setFilter={() => setFilter('all')}
      />
      <CustomFilter
        icon={OpenIcon}
        description={'Open'}
        number={countSpecificIssues('open', issues)}
        selected={filter === 'open'}
        setFilter={() => setFilter('open')}
      />
      <CustomFilter
        icon={ClosedICon}
        description={'Closed'}
        number={countSpecificIssues('done', issues)}
        selected={filter === 'closed'}
        setFilter={() => setFilter('closed')}
      />
    </div>
  );
};

export default Navigation;

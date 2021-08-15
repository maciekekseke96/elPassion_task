import React from 'react';
import CustomFilter from '../CustomFilter/CustomFilter';
import { ReactComponent as AllIcon } from './../../assets/icon-github.svg';
import { ReactComponent as OpenIcon } from './../../assets/icon-open-issue.svg';
import { ReactComponent as ClosedICon } from './../../assets/icon-closed-issue.svg';
import './Navigation.scss';

const Navigation = ({ filter, setFilter }) => {
  return (
    <div className="navigation-container">
      <CustomFilter
        icon={AllIcon}
        description={'All'}
        number={12}
        selected={filter === 'all'}
        setFilter={() => setFilter('all')}
      />
      <CustomFilter
        icon={OpenIcon}
        description={'Open'}
        number={8}
        selected={filter === 'open'}
        setFilter={() => setFilter('open')}
      />
      <CustomFilter
        icon={ClosedICon}
        description={'Closed'}
        number={4}
        selected={filter === 'closed'}
        setFilter={() => setFilter('closed')}
      />
    </div>
  );
};

export default Navigation;

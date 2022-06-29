import React from 'react';
import Title from './Title';
import Missions from '../data/missions';

class missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default missions;

import React from 'react';

class planetCards extends React.Component {
  render() {
    return (
      <div data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <img className="imgPlanet" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
export default planetCards;

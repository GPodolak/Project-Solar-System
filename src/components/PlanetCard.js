import React from 'react';
import propTypes from 'prop-types';

class planetCards extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="SubTitle" data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <img className="imgPlanet" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
planetCards.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};
export default planetCards;

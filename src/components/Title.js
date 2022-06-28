import React from 'react';
import PropTypes from 'prop-types';

class title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        { headline }
      </h2>
    );
  }
}
title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default title;

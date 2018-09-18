import { Component } from 'react';
import PropTypes from 'prop-types';

class Plague extends Component {
  render() {
    if (this.props.plague.hasBegun === false) {
      this.props.plagueMethods.beginInfection()
    }

    return null
  }
}

Plague.propTypes = {
  plague: PropTypes.object,
  plagueMethods: PropTypes.object
}

export default Plague
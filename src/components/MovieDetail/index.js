import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../../actions';

class MovieDetail extends Component {
  
  render() {
    if (this.props.selectMovie === null) return null;
    return (
      <div>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectMovie: state.selectMovie,
  };
};

export default connect(mapStateToProps, { selectMovie })(MovieDetail);
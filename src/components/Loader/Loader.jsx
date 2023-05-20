import React from 'react';
// import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = props => {
  return (
    <div className={css.Loader}>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

// Loader.propTypes = {};

export default Loader;

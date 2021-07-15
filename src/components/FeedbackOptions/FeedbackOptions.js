import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(item => (
      <button
        key={item}
        className={styles.btn}
        type="button"
        onClick={onLeaveFeedback(item)}
      >
        {item}
      </button>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;

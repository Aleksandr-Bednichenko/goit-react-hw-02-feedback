import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className="container">
    <h2 className="feedback">{title}</h2>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

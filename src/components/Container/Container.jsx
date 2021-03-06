/* eslint-disable react/prop-types */
import React from 'react';
import './Container.scss';

function container(props) {
  const { children } = props;
  return (
    <div className="container-lg">
      {children}
    </div>
  );
}

export default container;

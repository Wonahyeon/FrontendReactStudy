import React, { useState } from 'react';

function UnitCounter(props) {
  const {length, onLengthChange} = props;
  return (
    <>
      <button type='botton' onClick={() => onLengthChange(Math.max(length - 1, 0))}>-</button>
      {length}
      <button type='botton' onClick={() => onLengthChange(Math.max(length + 1, 0))}>+</button>
    </>
  );
}

export default UnitCounter;
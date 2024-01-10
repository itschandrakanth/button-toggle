// Parent component
import React, { useState } from 'react';
import Toggle from './Toggle';

const Button = () => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortChange = (newOrder) => {
    setSortOrder(newOrder);
    console.log('Sorting order changed to...', newOrder);
  };

  const customIcons = {
    asc: '↑',
    desc: '↓',
    neutral: '↕',
  };

  return (
    <div>
      <Toggle onChange={handleSortChange} hasNeutralState icons={customIcons} />
    </div>
  );
};

export default Button;

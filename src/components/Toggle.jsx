// Child component
import React, { useState } from 'react';

const Toggle = ({ onChange, hasNeutralState = false, icons = {} }) => {
  const [order, setOrder] = useState('asc'); // Initial order is ascending

  const handleToggleClick = () => {
    let newOrder;
    
    // If the component has a neutral state, we need to handle the three states
    if (hasNeutralState) {
      switch (order) {
        case 'asc':
          newOrder = 'desc';
          break;
        case 'desc':
          newOrder = null; // Neutral state
          break;
        default:
          newOrder = 'asc';
      }
    } else {
      newOrder = order === 'asc' ? 'desc' : 'asc';
    }

    setOrder(newOrder);
    onChange(newOrder);
  };

  const getIcon = () => {
    if (hasNeutralState) {
      switch (order) {
        case 'asc':
          return icons.asc || '↑';
        case 'desc':
          return icons.desc || '↓';
        default:
          return icons.neutral || '↕';
      }
    } else {
      return order === 'asc' ? icons.asc || '↑' : icons.desc || '↓';
    }
  };

  return (
    <>
    <button onClick={handleToggleClick} >
      {getIcon()}
    </button>
    </>
    
  );
};

export default Toggle;

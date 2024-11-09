

import React from 'react';

const GenericCard = ({ title, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md">
              <h3 className="text-lg font-medium">{item.name}</h3>
              {item.details && <p className="text-sm text-gray-500">{item.details}</p>}
            </div>
          ))
        ) : (
          <p>No items to display.</p> 
        )}
      </div>
    </div>
  );
};

export default GenericCard;




  
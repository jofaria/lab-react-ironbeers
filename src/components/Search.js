import React from 'react';
import { useState } from 'react';

function Search({ handleSearchObj }) {
  const [char, setChar] = useState('');

  const getChars = (e) => {
    setChar(e.target.value);
    handleSearchObj(e.target.value);
  };

  return (
    <div>
      <label>Search for a beer: </label>

      <input
        value={char}
        type="text"
        onChange={getChars}
        placeholder="Search by title, creator..."
      />
    </div>
  );
}

export default Search;

import React, { useEffect } from 'react';
import './TodoSearch.css';
import { useSearchParams } from 'react-router-dom';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsValue = searchParams.get('search');

  useEffect(() => {setSearchValue(paramsValue)}, [paramsValue])

  const onSearchValueChange = (event) => {
    setSearchParams({search: event.target.value })
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };

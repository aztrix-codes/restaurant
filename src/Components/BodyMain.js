import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import SellCard from './SellCard';

function BodyMain() {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <div className='BodyMain'>
        <SearchBar/>
        <Filter setActiveLink={setActiveLink} activeLink={activeLink}/>
        <SellCard activeLink={activeLink}/>
    </div>
  )
}

export default BodyMain;
import React from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import SellCard from './SellCard'

function BodyMain() {
  return (
    <div className='BodyMain'>
        <SearchBar/>
        <Filter/>
        <SellCard/>
    </div>
  )
}

export default BodyMain
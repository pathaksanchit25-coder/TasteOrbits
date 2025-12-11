// Generalpage.jsx
import React from 'react'
import Navbar from '../../General/Navbar'
import { useParams } from 'react-router-dom'

const Generalpage = () => {
  const { city, tab } = useParams(); // get both city and tab from URL

  return (
    <div>
      <Navbar selectedCity={city} selectedTab = {tab} />
      
    </div>
  )
}

export default Generalpage
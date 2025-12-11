// AuthRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../General/Home'
import RegisterUser from '../Auth/RegisterUser'
import LoginUser from '../Auth/LoginUser'
import RegisterPartner from '../Auth/RegisterPartner'
import LoginPartner from '../Auth/LoginPartner'
import Generalpage from '../Pages/Generalpage'
import Restaurantpage from '../Pages/Restaurantpage'
import Deliverypage from '../Pages/Deliverypage'
import PartnerDashboardCreate from '../Pages/PartnerDashboardCreate'
import RestaurantAdd from '../Pages/RestaurantAdd'
import Restaurantviewpage from '../Pages/Restaurantviewpage'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<RegisterUser />} />
      <Route path='/login' element={<LoginUser />} />
      <Route path='/partner/register' element={<RegisterPartner />} />
      <Route path='/partner/login' element={<LoginPartner />} />
      <Route path='/partner' element={<PartnerDashboardCreate />} />

      {/* Dynamic city + tab routes */}
      <Route path='/city/:city/:tab' element={<Generalpage />} />
      <Route path='/city/:city/restaurants' element={<Restaurantpage />} />

      {/* Adding and viewing restaurant page*/}
      <Route path='/partner/restaurant/add' element={<RestaurantAdd />} />
      <Route path = '/partner/restaurant/view' element= {<Restaurantviewpage />}/>

    </Routes>




  )
}

export default AuthRoutes
import React from 'react'
import NavUser from '../Components/NavUser'
import RestaurantpageUser from '../Pages/RestaurantpageUser'
import UserRestaurantViewPage from './UserRestaurantViewPage'

const RegisteredUserPage = () => {
  return (
    <div>
        <NavUser/>
        <UserRestaurantViewPage/>
    </div>
  )
}

export default RegisteredUserPage
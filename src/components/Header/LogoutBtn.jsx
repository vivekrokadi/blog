import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-2 py-1 sm:px-4 sm:py-1.5 rounded-lg duration-200 hover:bg-blue-600/80 text-[14px] hover:text-white sm:text-lg' onClick={handleLogout}>Logout</button>
  )
}

export default LogoutBtn
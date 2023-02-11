import React from 'react'
import { Navigate } from 'react-router'

let isAuth = true
const PrivateRoute = ({children}) => {

    if(isAuth){
        return <>{children}</>
    }else{
        return <Navigate replace to='/login' />
    }
}

export default PrivateRoute
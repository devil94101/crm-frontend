import React, { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Login from '../../components/login/Login.component'
import ResetPassword from '../../components/password-reset/PasswordReset.comp'
import './entry.page.css'

export const Entry = () => {

    const [formValues, setFormValues] = useState({})
    const [frmLoad, setFrmLoad] = useState('login')

    const handleChange = (e) => {
        let { name, value } = e.target
        let newFormValues = {
            ...formValues
        }
        newFormValues[name] = value
        setFormValues(newFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formValues['email'] || !formValues['password']) {
            alert("Email and password is required!")
        }
    }

    const switchFrom = (val) =>{
        setFrmLoad(val)
    }
    const handleResetSubmit=(e)=>{
        e.preventDefault()
        if (!formValues['email'] ) {
            alert("Email is required!")
        }
    }

    return (
        <div className='entry-page bg-info'>
            <Jumbotron className='form-box'>
                {frmLoad === 'login' && <Login
                    formValues={formValues}
                    onChange={handleChange}
                    handleSubmit={handleSubmit}
                    switchFrom = {switchFrom}
                /> }
                {frmLoad === 'reset' &&
                    <ResetPassword
                        formValues={formValues}
                        onChange={handleChange}
                        handleSubmit={handleSubmit}
                        switchFrom = {switchFrom}
                    />
                }
            </Jumbotron>
        </div>
    )
}

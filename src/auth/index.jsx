import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import { SimpleContext } from '../context/simpleContext'
import { AdminContext } from '../context/adminContext'
import "./index.scss"

import { simple_login_email, simple_login_password, admin_login_email, admin_login_password, super_admin_login_email, super_admin_login_password } from '../utils/constans'
const Auth = () => {
    const { simpleContext, setSimpleContext } = React.useContext(SimpleContext)
    const { adminContext, setAdminContext } = React.useContext(AdminContext)
    let count = 0;
    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { email, password } = evt.target.elements
        simpleContext.forEach((item, index) => {
            if (item.email === email.value && item.password === password.value) {
                count++;
                window.location.href = '/simple'
                localStorage.setItem("user", String(item.id))
                return evt.target.reset();
            } else if (email.value === super_admin_login_email && password.value === super_admin_login_password) {
                count++;
                window.location.href = '/super-admin'
                localStorage.setItem("user", "super-admin")
            }
            adminContext.forEach((item) => {
                if (item.email === email.value && item.password === password.value && count === 0) {
                    count++;
                    window.location.href = '/admin'
                    localStorage.setItem("admin", String(item.id))
                    return evt.target.reset();
                } else if (count === 0) {
                    alert("Email or password is incorrect")
                }
            })
        })

        evt.target.reset();
    }
    return (
        <>
            <div className="container">
                <div className="row h-100 align-items-center justify-content-center mt-5">
                    <div className="col-4 mt-5">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h3 className="text-center">Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={(evt) => handleSubmit(evt)}>
                                    <div className="form-group mb-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" name='email' id="email" placeholder="Enter email" required />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" name='password' id="password" placeholder="Password" required />
                                    </div>
                                    <button className='btn btn-primary w-100'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth

import React from 'react'
import Auth from '../auth'
import { Route, Routes } from 'react-router-dom'
import SimplePage from '../pages/SimplePage'
import AdminPage from '../pages/AdminPage'
import SuperAdminPage from '../pages/SuperAdminPage'
const Root = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/simple" element={<SimplePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/super-admin" element={<SuperAdminPage />} />
            </Routes>


        </>
    )
}

export default Root

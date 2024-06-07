import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LiveMapPage from '../pages/LiveMapPage'
import Equipment from '../pages/Equipment'
import Risk from '../pages/Risk'
import FormPage from '../pages/FormPage'
const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/live-map' element={<LiveMapPage />} />
            <Route path='/equipment' element={<Equipment />} />
            <Route path='/risk' element={<Risk />} />
            <Route path='/form' element={<FormPage />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    )
}

export default MyRouter
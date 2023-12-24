import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom'
function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default SharedLayout

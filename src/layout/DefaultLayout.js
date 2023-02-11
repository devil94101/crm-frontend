import React from 'react'
import { Outlet } from 'react-router'
import Footer from './partials/Footer.comp'
import Header from './partials/Header.comp'

const DefaultLayout = () => {
  return (
    <div className="default-layout">
    <header className="header mb-2">
      <Header />
    </header>

    <main className="main"><Outlet/></main>

    <footer className="footer">
      <Footer />
    </footer>
  </div>
  )
}

export default DefaultLayout
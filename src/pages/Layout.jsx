import React from 'react'
import {Outlet} from 'react-router-dom'
import CustomLink from "../components/CustomLink"

const Layout = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header_container container">
          <div className="header_left">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/posts">Posts</CustomLink>
            <CustomLink to="/todos">Todos</CustomLink>
          </div>
        </div>
      </header>

      <main className="page">
        <div className="main_container container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          &copy; Saga 2023
        </div>
      </footer>
    </div>
  )
}

export default Layout

import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'
import poligonos from '../../assets/poligonos.png'
import './navbar.css'

const { Brand, Toggle, Offcanvas: Ocanvas } = Navbar

const NavigatorNav = ({ backButton, searchBar, title }) => {
  const expand = false

  const routes = [
    {
      label: 'Inicio',
      path: '/',
    },
    {
      label: 'Nosotros',
      path: '/about',
    },
    {
      label: 'Blog/Noticias',
      path: '/blog',
    },
    {
      label: 'Material',
      path: '/material',
    },
    {
      label: 'Mapa de conflicto',
      path: '/map',
    },
  ]

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-white mb-3 border-dark border-bottom p-0 nav">
        <div className="d-flex align-items-center w-100">
          {backButton && <div className="col-1 d-flex justify-content-start btn-back p-0 me-3">{backButton}</div>}
          {!backButton && (
            <div className="col-1 d-flex justify-content-start btn-back p-0 me-3" style={{ visibility: 'hidden' }}>
              {backButton}
            </div>
          )}
          <div className="d-flex gap-3 align-items-center">
            <img src={logo} alt="logo" className="nav-logo"></img>
            {title && <Brand className="fs-1 fw-bold">{title}</Brand>}
          </div>
          <div className="d-flex gap-3 flex-grow-1 justify-content-end align-items-center">
            {searchBar && <div>{searchBar}</div>}{' '}
            <Toggle className="border-0" aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </div>
          <Ocanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="ms-auto me-4 text-dark"></Offcanvas.Header>
            <Offcanvas.Body className="ms-auto d-flex flex-column justify-content-between align-items-start gap-5">
              <Nav className="justify-content-start flex-grow-1 pe-3 link-item">
                {routes.map((route, i) => (
                  <Link className="fs-3 text-decoration-none nav-item text-end" to={route.path} key={i}>
                    {route.label}
                  </Link>
                ))}
              </Nav>
              <img src={poligonos} alt="poligonos" width="233" height="588" className="poligonos"></img>
              <img src={logo} alt="logo" width="150" height="210" className="logo ms-auto"></img>
            </Offcanvas.Body>
          </Ocanvas>
        </div>
      </Navbar>
    </>
  )
}

NavigatorNav.propTypes = {
  backButton: PropTypes.element,
  searchBar: PropTypes.element,
  title: PropTypes.string,
}

export default NavigatorNav

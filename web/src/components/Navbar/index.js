import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo2.png';
import cps from '../../assets/img/cps.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

import api from "../../services/api";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('')
  const [controller, setController] = useState('')
  const toggle = () => setIsOpen(!isOpen);


  const [token, setToken] = useState('');

  async function logout() {
    localStorage.clear();
    window.location.replace('/login')
  }

  // useEffect(() => {
  //   async function getUserName() {
  //     const _id = localStorage.getItem('_id')

  //     if (_id) {
  //       const response = await api.get(`/register/${_id}`).catch(e => {

  //       });
  //       setUser(response.data.user)
  //       setController(response.data.controller)
  //       console.log(response.data.controller)
  //     } else {

  //     }

  //   }
  //   getUserName()

  // }, [])

  useEffect(() => {

    setToken(localStorage.getItem('token'))

    async function getUserName() {
      const auth_id = localStorage.getItem('auth_id')

      if (auth_id) {
        const response = await api.get(`/users/${auth_id}`).catch(e => { });
        setUser(response.data.username)
        setController(response.data.controller)
      } else {

      }

    }
    getUserName()

  }, [])


  return (
    <>
      <Navbar style={{ backgroundColor: "#231f20" }}>
        <img
          style={{
            height: 50,
            width: 125,
          }}
          src={logo}
        />
        <img
          style={{
            height: 90,
            width: 350,
            borderRadius: 10,
            marginBottom: 10,
          }}
          src={cps}
        />
        <span onClick={logout} style={{ color: '#fff', cursor: 'pointer' }} >
          Sair
        </span>

      </Navbar>

      <Navbar style={{ backgroundColor: '#8b0000' }} light expand="md">
        <NavbarBrand href="/home" style={{ color: '#fff' }}>
          Biblioteca Virtual de TCC
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="https://www.cps.sp.gov.br" style={{ color: '#fff' }}>CPS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://nsa.cps.sp.gov.br" style={{ color: '#fff' }}>NSA</NavLink>
          </NavItem>
        </Nav>
        <Nav navbar>
          {controller == 1 ? (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: '#fff' }}>
                Bem Vindo, {user}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/admin/admin" style={{ color: "#231f20" }}>CRUD Admin</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/admin/student" style={{ color: "#231f20" }}>CRUD Aluno</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/admin/course" style={{ color: "#231f20" }}>CRUD Curso</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
              <>
                <NavbarText style={{ color: '#fff' }} >Bem Vindo, {user}</NavbarText>
              </>
            )}
        </Nav>
        </Collapse>
      </Navbar>
    </>

  );
}

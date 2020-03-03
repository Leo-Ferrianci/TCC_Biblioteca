
import React from 'react';
import logo from '../../assets/img/logo2.png';
import cps from '../../assets/img/cps.jpg';
import {
  Button,
  Nav,
  Navbar,
  FormControl,
  Dropdown
} from 'react-bootstrap';


export default function NavBar() {
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
            marginLeft: "25%",
            marginBottom: 10
          }}
          src={cps}
        />
        <Nav className="ml-auto mb-auto">
          <Nav.Link href="/login" style={{ color: '#fff' }}>Login</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar style={{ backgroundColor: "#8b0000", height: 60 }}>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav className="">
            <div
              className=""
              style={{
                color: '#fff',
                fontFamily: 'bold',
                fontSize: 20
              }}
            >
              Biblioteca Virtual de Trabalhos de Conclusão de Curso
                        </div>
          </Nav>
        </Nav>
      </Navbar>
    </>

  );
}

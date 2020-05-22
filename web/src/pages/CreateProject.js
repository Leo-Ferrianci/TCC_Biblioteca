import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import Sidebar from '../components/Sidebar'
import {
  Col,
  Row,
  Container,
  Card,
  CardHeader,
  Button,
  Form,
  FormGroup,
  Input,
  Table,
  Label,
  CardBody,
  FormText
} from 'reactstrap';

import api from "../services/api";

export default function Student() {
  const [course, setCourse] = useState([])
  const [project, setProject] = useState([])
  const [cs_username, setcs_username] = useState('')
  const [image, setImage] = useState('')
  const [load, setLoad] = useState(false)

//   useEffect(() => {
//     async function loadCourse() {
//       const id = JSON.parse(localStorage.getItem('course_id'))
//       const response = await api.get(`/projects/${id}`);
//       setProject(response.data);
//       console.log(id)
//     }
//     loadCourse();
//   }, []);

//   async function getProject(a) {
//     window.location.replace(`/admin/createProject/${a}`)

//     localStorage.setItem('course_id', a);
// }

  // async function handleRegister(e) {
  //   setLoad(true)
  //   const response = await api.post('/courses', {
  //     cs_username,
  //   })
  //   setLoad(false)
  //   setcs_username('');
  //   setImage('');
  //   setCourse([...course, response.data])
  // }

  // async function handleDelete(a) {
  //   await api.delete(`/courses/${a}`).catch(e => {
  //     alert('Erro ao deletar anúncio.')
  //   });
  //   window.location.reload()
  // }

  return (
    <>
      <NavBar />
      <Container style={{ minHeight: 500 }}>
        <Row>
          <Col>
          </Col>
        </Row>

      </Container>
      <FooterPage />
    </>
  );

}

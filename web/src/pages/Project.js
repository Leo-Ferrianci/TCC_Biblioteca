import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import Sidebar from '../components/Sidebar'
import {
  Col,
  Row,
  Container,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
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

export default function Project() {
  const [course, setCourse] = useState([])
  const [project, setProject] = useState([])
  const [pt_username, setpt_username] = useState('')
  const [pt_students, setpt_students] = useState('')
  const [pt_year, setpt_year] = useState('')
  const [image, setImage] = useState('')
  const [load, setLoad] = useState(false)

  useEffect(() => {
    async function loadCourse() {
      const id = JSON.parse(localStorage.getItem('course_id'))
      const response = await api.get(`/filterprojects/${id}?pt_username=${pt_username}&pt_students=${pt_students}&pt_year${pt_year}`);
      setProject(response.data);
      console.log(response.data)
    }
    loadCourse();
  }, [ pt_username, pt_students, pt_year ]);

  async function getProject() {
    const id = JSON.parse(localStorage.getItem('course_id'))
    window.location.replace(`/admin/createProject/${id}`)

    localStorage.setItem('course_id', id);
  }

  async function handleDelete(a) {
    await api.delete(`/projects/${a}`).catch(e => {
      alert('Erro ao deletar anúncio.')
    });
    window.location.reload()
  }

  async function getUpdate(a) {
    window.location.replace(`/admin/editProject/${a}`)
    // console.log(a)
    localStorage.setItem('project_id', a);
  }

  return (
    <>
      <NavBar />
      <Container style={{ minHeight: 500 }}>
        <Row className="d-flex align-items-center mt-3 mb-4">
          <Col lg="5">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Procurar por</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Nome" value={pt_username} onChange={(event) => setpt_username(event.target.value)} />
              <Input placeholder="Alunos" value={pt_students} onChange={(event) => setpt_students(event.target.value)} />
              <Input placeholder="Ano" value={pt_year} onChange={(event) => setpt_year(event.target.value)} />
            </InputGroup>
          </Col>
          <Col lg="3">
            <button className="button" onClick={getProject}>
              <span>
                Adicionar TCC
                </span>
            </button>
          </Col>
        </Row>
        <Table bordered className="" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Alunos</th>
              <th>Ano de Publicação</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {project.map(a => (
              <tr key={a._id}>
                <th scope="row">{a.pt_username}</th>
                <td>{a.pt_students}</td>
                <td style={{ cursor: 'pointer' }} >{a.pt_year}</td>
                <td className="text-center">
                  <span style={{ cursor: 'pointer' }} onClick={() => getUpdate(a.id)}>
                    Editar
                  </span>
                </td>
                <td style={{ cursor: 'pointer' }} onClick={() => handleDelete(a.id)}>Excluir</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <FooterPage />
    </>
  );

}

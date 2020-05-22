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

export default function Student() {
  const [course, setCourse] = useState([])
  const [project, setProject] = useState([])
  const [cs_username, setcs_username] = useState('')
  const [image, setImage] = useState('')
  const [load, setLoad] = useState(false)

  useEffect(() => {
    async function loadCourse() {
      const id = JSON.parse(localStorage.getItem('course_id'))
      const response = await api.get(`/projects/${id}`);
      setProject(response.data);
    }
    loadCourse();
  }, []);

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

    localStorage.setItem('course_id', a);
  }

  return (
    <>
      <NavBar />
      <Container style={{ minHeight: 500 }}>
        <Row className="d-flex align-items-center mt-3 mb-4">
          <Col lg="5">
            <InputGroup>
              <Input placeholder="username" />
              <InputGroupAddon addonType="append">
                <InputGroupText>Procurar</InputGroupText>
              </InputGroupAddon>
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

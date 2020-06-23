import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Table,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label
} from 'reactstrap';
import api from "../services/api";
import "../assets/css/styles.css";

export default function Course({ history }) {
  // Variaveis Curso
  const [course, setCourse] = useState([])
  const [cs_username, setcs_username] = useState('')

  //Modal
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    async function loadCourse() {
      const response = await api.get(`/filtercourses?cs_username=${cs_username}`);
      setCourse(response.data);
    }
    loadCourse();
  }, [cs_username]);

  async function handleDelete(a) {
    await api.delete(`/courses/${a}`).catch(e => {
      alert('Erro ao deletar anúncio.')
    });
    window.location.reload()
  }

  async function getUpdate(a) {
    window.location.replace(`/admin/editCourse/${a}`)

    localStorage.setItem('course_id', a);
  }

  async function getProject(a) {
    window.location.replace(`/admin/project/${a}`)

    localStorage.setItem('course_id', a);
  }


  return (
    <>
      <NavBar />
      <Container style={{ minHeight: 500 }}>
        <Row className="d-flex align-items-center mt-3 mb-4">
          <Col lg="5">
            <InputGroup>
              <Input placeholder="username" value={cs_username} onChange={(event) => setcs_username(event.target.value)} />
              <InputGroupAddon addonType="append">
                <InputGroupText>Procurar</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col lg="3">
            <a href="/admin/create">
              <button className="button">
                <span>
                  Criar novos cursos
                </span>
              </button>
            </a>
          </Col>
        </Row>


        <Table bordered style={{ width: '90%' }}>
          <thead style={{ alignItems: 'center' }}>
            <tr>
              <th>Curso</th>
              <th>Adicionar TCC</th>
              <th className="text-center">Editar </th>
              <th className="text-center">Excluir</th>
            </tr>
          </thead>
          {course.map(a => (
            <tbody>
              <tr className="align-items-center">
                <th scope="row">{a.cs_username}</th>
                <td>
                  <span style={{ cursor: 'pointer' }} onClick={() => getProject(a.id)}>
                    Acervo
                  </span>
                </td>
                <td className="text-center">
                  <span style={{ cursor: 'pointer' }} onClick={() => getUpdate(a.id)}>
                    Editar
                  </span>
                </td>
                <td className="text-center">
                  <span style={{ cursor: 'pointer' }} onClick={() => handleDelete(a.id)}>
                    Excluir
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
      <FooterPage />
    </>
  );

}

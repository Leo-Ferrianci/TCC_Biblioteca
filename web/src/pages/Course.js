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

//Variaveis Project
  const [project, setProject] = useState([])
  const [pt_username, setpt_username] = useState([])
  const [pt_students, setpt_students] = useState([])
  const [pt_year, setpt_year] = useState([])

//Modal
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    async function loadCourse() {
      const response = await api.get(`/courses`);
      setCourse(response.data);
    }
    loadCourse();
  }, []);

  async function handleDelete(a) {
    await api.delete(`/courses/${a}`).catch(e => {
      alert('Erro ao deletar anúncio.')
    });
    window.location.reload()
  }

  async function handleUpdate(a) {
    setModal(true)
    const response = await api.get(`/projects/${a}`).catch(e => {
      alert('Erro ao buscar projetos.')
    });
    setProject(response.data)
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
              <Input placeholder="username" />
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
                    Criar
                  </span>
                </td>
                <td className="text-center">
                  <span style={{ cursor: 'pointer' }} onClick={() => handleUpdate(a.id)}>
                    editar
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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Adicionar Trabalho de Conclusão de Curso</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Nome do Curso</Label>
            <Input
              type="text"
              name="text"
              value={pt_username}
              onChange={event => setpt_username(event.target.value)}
            />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <FooterPage />
    </>
  );

}

Course.propTypes = {
  match: PropTypes.shape({}).isRequired,
}

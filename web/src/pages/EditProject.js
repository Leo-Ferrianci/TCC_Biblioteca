import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
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
  Label,
  CardHeader,
  CardBody
} from 'reactstrap';
import api from "../services/api";
import "../assets/css/styles.css";

export default function Course({ history }) {
  // Variaveis Curso
  const [pt_username, setpt_username] = useState('')
  const [pt_students, setpt_students] = useState('')
  const [pt_year, setpt_year] = useState('')

  useEffect(() => {
    async function loadProject() {
      const id = JSON.parse(localStorage.getItem('course_id'))
      if (id) {
        const response = await api.get(`/projects/${id}`);
        setpt_username(response.data[0].pt_username);
        setpt_students(response.data[0].pt_students);
        setpt_year(response.data[0].pt_year);
      } else {
        alert('deu ruim')
      }
    }
    loadProject();
  }, []);

  async function handleUpdate() {
    const id = JSON.parse(localStorage.getItem('course_id'))
    if (id) {
      const response = await api.put(`/projects/${id}`, {
        pt_username,
        pt_students,
        pt_year
      })

      if (response.data) {
        const id = JSON.parse(localStorage.getItem('course_id'))
        window.location.replace(`/admin/project/${id}`)
      }
    }
  }

  return (
    <>
      <NavBar />
      <Container style={{ minHeight: 500 }}>
        <Row className="d-flex  justify-content-center mt-5">
          <Col lg="4">
            <Card>
              <CardHeader className="text-center">
                <span>
                  Editar
              </span>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label for="exampleEmail">Nome do TCC</Label>
                  <Input
                    type="text"
                    name="text"
                    value={pt_username}
                    onChange={event => setpt_username(event.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Alunos</Label>
                  <Input
                    type="text"
                    name="text"
                    value={pt_students}
                    onChange={event => setpt_students(event.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Ano de publicação</Label>
                  <Input
                    type="text"
                    name="text"
                    value={pt_year}
                    onChange={event => setpt_year(event.target.value)}
                  />
                </FormGroup>
                <div className="text-center">
                  <button className="button" onClick={handleUpdate}>
                    <span>
                      Atualizar
                    </span>
                  </button>
                </div>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterPage />
    </>
  );

}

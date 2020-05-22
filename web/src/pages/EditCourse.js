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

export default function EditCourse({ history }) {
  // Variaveis Curso
  const [cs_username, setcs_username] = useState([])

  useEffect(() => {
    async function loadCourse() {
      const id = JSON.parse(localStorage.getItem('course_id'))
      const response = await api.get(`/courses/${id}`);
      setcs_username(response.data[0].cs_username);
      console.log(response.data)
      console.log(id)
    }
    loadCourse();
  }, []);

  async function handleUpdate() {
    const id = JSON.parse(localStorage.getItem('course_id'))
    if (id) {
      const response = await api.put(`/courses/${id}`, { cs_username })

      if (response.data) {
        // window.location.reload()
        window.location.replace(`/admin/course`)
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
                  <Label for="exampleEmail">Nome do Curso</Label>
                  <Input
                    type="text"
                    name="text"
                    value={cs_username}
                    onChange={event => setcs_username(event.target.value)}
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

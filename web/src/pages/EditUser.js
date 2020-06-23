import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Input,
  Container,
  FormGroup,
  Label,
  CardHeader,
  CardBody
} from 'reactstrap';
import api from "../services/api";
import "../assets/css/styles.css";

export default function EditUser({ history }) {
  // Variaveis Curso
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const id = JSON.parse(localStorage.getItem('user_id'))
  console.log(id)

  useEffect(() => {
    async function loadCourse() {
      const response = await api.get(`/users/${id}`);
      setUsername(response.data.username);
      setEmail(response.data.email);
      console.log(response.data)
      console.log(id)
    }
    loadCourse();
  }, []);

  async function handleUpdate() {
    if (id) {
      const response = await api.put(`/users/${id}`, { username, email })

      if (response.data) {
        // window.location.reload()
        window.location.replace(`/home`)
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
                  <Label for="exampleEmail">Nome</Label>
                  <Input
                    type="text"
                    name="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="text"
                    name="text"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
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

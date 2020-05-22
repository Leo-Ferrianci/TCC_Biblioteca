import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import Sidebar from '../components/Sidebar'
import {
  Col,
  Row,
  Card,
  CardHeader,
  Button,
  Form,
  FormGroup,
  Input,
  Table,
  Label,
  CardBody,
  FormText,
  Container
} from 'reactstrap';

import api from "../services/api";

export default function CreateProject() {
  const [project, setProject] = useState([])
  const [pt_username, setpt_username] = useState('')
  const [pt_students, setpt_students] = useState('')
  const [pt_year, setpt_year] = useState('')
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

  async function handleRegister(e) {
    setLoad(true)
    const id = JSON.parse(localStorage.getItem('course_id'))
    const response = await api.post(`/projects/${id}`, {
      pt_username,
      pt_students,
      pt_year
    })
    setLoad(false)
    setpt_username('');
    setpt_year('');
    setpt_students('');
    // setImage('');
    setProject([...project, response.data])
  }

  async function handleDelete(a) {
    await api.delete(`/courses/${a}`).catch(e => {
      alert('Erro ao deletar anúncio.')
    });
    window.location.reload()
  }

  return (
    <>
      <NavBar />
      <Container style={{ minHeight: 500 }}>
        <Row className="mt-4">
          <Col lg="4">
            <Card>
              <CardBody>
                <Form>
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
                    <Label for="exampleEmail">Nome dos alunos</Label>
                    <Input
                      type="text"
                      name="text"
                      value={pt_students}
                      onChange={event => setpt_students(event.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Ano de Publicação</Label>
                    <Input
                      type="text"
                      name="text"
                      value={pt_year}
                      onChange={event => setpt_year(event.target.value)}
                    />
                  </FormGroup>
                  {/* <FormGroup>
                                            <FormGroup>
                                                <Label for="exampleFile">Imagem da capa</Label>
                                                <Input
                                                    type="file"
                                                    name="file"
                                                    id="exampleFile"
                                                    value={image}
                                                    onChange={event => setImage(event.target.value)}
                                                />
                                            </FormGroup>
                                        </FormGroup> */}
                  <div className="text-center">
                    {load == false ? (
                      <button className="button1" onClick={handleRegister}>
                        <span>
                          Cadastrar
                        </span>
                      </button>
                    ) : (
                        <button color="secundary" onClick={handleRegister}>Cadastrar</button>
                      )}
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col lg="8">
            <Table bordered className="" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Alunos</th>
                  <th>Ano de Publicação</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {project.map(a => (
                  <tr key={a._id}>
                    <th scope="row">{a.pt_username}</th>
                    <td>{a.pt_students}</td>
                    <td>{a.pt_year}</td>
                    <td className="text-center">
                      <span style={{ cursor: 'pointer' }} onClick={() => handleDelete(a.id)}>
                        Excluir
                  </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <FooterPage />
    </>
  );

}

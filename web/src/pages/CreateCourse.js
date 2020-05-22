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

export default function CreateCurse() {
    const [course, setCourse] = useState([])
    const [cs_username, setcs_username] = useState('')
    const [image, setImage] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function loadCourse() {
            const response = await api.get('/courses');
            setCourse(response.data);
        }
        loadCourse();
    }, []);

    async function handleRegister(e) {
        setLoad(true)
        const response = await api.post('/courses', {
            cs_username,
        })
        setLoad(false)
        setcs_username('');
        setImage('');
        setCourse([...course, response.data])
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
            <Container style={{minHeight:500}}>
                <Row className="mt-4">
                    <Col lg="4">
                        <Card>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Nome do Curso</Label>
                                        <Input
                                            type="text"
                                            name="text"
                                            value={cs_username}
                                            onChange={event => setcs_username(event.target.value)}
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
                                    <th>Editar</th>
                                    <th>Deletar</th>
                                    <th>Adicionar TCC</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {course.map(a => (
                                    <tr key={a._id}>
                                        <th scope="row">{a.cs_username}</th>
                                        <td>Atualizar</td>
                                        <td style={{ cursor: 'pointer' }} onClick={() => handleDelete(a.id)}  >Excluir</td>
                                        <td style={{ cursor: 'pointer' }} onClick={() => handleDelete(a.id)}  >Adicionar</td>
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

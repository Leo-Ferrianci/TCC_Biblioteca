import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import Sidebar from '../components/Sidebar'
import administracao from '../assets/img/book.png';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Input,
    Form,
    Label,
    FormText,
    Button
} from 'reactstrap';

import api from "../services/api";

export default function Home() {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    async function sendCourse() {
        const response = await api.post(`/course`, {
          name,
          image,
        }).catch(e => {
          alert('Erro ao enviar dados')
        })
      }

    return (
        <div>
            <NavBar />
            <Row >
                <Col lg="3">
                    <Sidebar />
                </Col>
                <Col lg="9" className="d-flex justify-content-center">
                    <Card className="mt-3 mb-3" style={{ width: '65%', height: 350 }}>
                        <CardHeader 
                        className="d-flex justify-content-center align-items-center"
                        >
                            <span>
                                Criar Curso
                            </span>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label>Nome do Curso</Label>
                                    <Input
                                        type="text"
                                        name="text"
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile">Imagem do Curso</Label>
                                    <Input 
                                    type="file" 
                                    name="file" 
                                    id="exampleFile"
                                    value={image}
                                    onChange={event => setImage(event.target.value)} 
                                    />
                                    <FormText color="muted">
                                        Está Imagem será a capa do curso criado.
                                    </FormText>
                                </FormGroup>
                            </Form>
                            <div className="text-center">
                                <Button
                                    style={{
                                        backgroundColor: "#8b0000",
                                        width: "50%",
                                        height: "5%",
                                        marginTop: 15
                                    }}
                                    onClick={sendCourse}
                                >
                                    Criar Curso
                                    </Button>
                            </div>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
            <FooterPage />
        </div>
    );

}
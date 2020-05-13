import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import administracao from '../assets/img/book.png';
import {
    Col,
    Row,
    Card,
    CardHeader,
    Button,
    Form,
    FormGroup,
    Input,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table
} from 'reactstrap';

import { Link } from 'react-router-dom';

import api from "../services/api";

export default function Home() {
    const [course, setCourse] = useState([]);
    const [project, setProject] = useState([]);
    const [modal, setModal] = useState(false);
    const [teste, setTeste] = useState('');

    const toggle = () => setModal(!modal);

    useEffect(() => {
        async function loadCourse() {
            const response = await api.get(`/course`);
            setCourse(response.data);
        }
        loadCourse();
    }, []);


    useEffect(() => {
        async function loadProject() {
            const response = await api.get(`/project`);
            setProject(response.data);
        }
        loadProject();
    }, []);

    async function handleProject(project) {
        history.push(`/auth/course/${project}`)

        localStorage.setItem('project_id', project);
    }

    // useEffect(() => {
    //     async function loadProject() {
    //       const response = await api.get(`/list_project?course=${teste}`).catch(e => {
    //         console.log('Falha na conexão')
    //       });
    //       setProject(response.data);
    //     }
    //     loadProject();
    //   }, []);

    return (
        <>
            <NavBar />
            <Container className=" justify-content-center align-items-center">
                <Row>
                    <Form inline>
                        <FormGroup>
                            <Input
                                placeholder="Procurar por Curso"
                                style={{
                                    width: '100%',
                                    marginTop: 20,
                                    borderColor: '#8b0000',
                                    borderRight: 0
                                }}
                            />
                        </FormGroup>
                        <Button style={{
                            marginTop: 20,
                            borderLeft: 0,
                            backgroundColor: '#8b0000'
                        }}
                        >
                            Procurar
                        </Button>
                    </Form>
                </Row>


                {course.map(a => (
                    <>
                        <Card key={a._id} className="text-center" style={{
                            marginTop: 50,
                            borderColor: '#8b0000',
                            backgroundColor: '#fff',
                        }}
                        >
                            <CardHeader style={{ backgroundColor: '#fff' }}>
                                <Row>
                                    <Col lg="2">
                                        <img
                                            style={{
                                                height: 55,
                                                width: 55,
                                                borderRadius: 10
                                            }}
                                            src={administracao}
                                        />
                                    </Col>
                                    <Col lg="8" className="d-flex align-items-center justify-content-center">
                                        <span style={{ fontSize: 30 }}>{a.name}</span>
                                    </Col>
                                    <Col lg="2" className="d-flex align-items-center justify-content-center">

                                        <Button
                                            onClick={toggle}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: '#8b0000',
                                                fontSize: 20
                                            }}
                                        >
                                            Acervo
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    </>
                ))}
            </Container>
            <FooterPage />
            <Modal isOpen={modal} toggle={toggle} size="xl">
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Table bordered style={{ width: '90%' }}>
                        <thead style={{ alignItems: 'center' }}>
                            <tr>
                                <th>TCC</th>
                                <th>Estudantes</th>
                                <th className="text-center">Ano </th>
                                <th className="text-center">Arquivo pdf</th>
                            </tr>
                        </thead>
                        {project.map(e => (
                            <tbody key={e._id}>
                                <tr className="align-items-center">
                                    <th scope="row">{e.name}</th>
                                    <td>{e.student.join(', ')}</td>
                                    <td className="text-center">{e.year}</td>
                                    <td className="text-center">
                                        <span style={{ cursor: 'pointer' }}>
                                            Download
                                             </span>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>

    );
}

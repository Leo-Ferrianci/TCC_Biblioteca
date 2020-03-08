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
    Button,
    Form,
    FormGroup,
    Input,
    Table,
    Label,
    CardBody,
    Spinner
} from 'reactstrap';

import api from "../services/api";

export default function Student() {
    const [student, setStudent] = useState([])
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [controller, setController] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function loadStudent() {
            const response = await api.get('/register');
            setStudent(response.data);
        }
        loadStudent();
    }, []);

    async function handleRegister(e) {
        setLoad(true)
        const response = await api.post('/register', {
            user,
            email,
            password,
            controller: 0
        })

        setLoad(false)
        setUser('');
        setEmail('');
        setPassword('');
        setStudent([...student, response.data])
    }

    async function handleDelete() {
        setLoad(true)
        const id = localStorage.getItem('id')
        await api.delete(`/register/${id}`, {
            student
        }).catch(e => {
            setLoad(false)
            alert(e.response.data.error)
        })
    }


    return (
        <div>
            <NavBar />
            <Row className="mt-4 mb-5 ml-4 d-flex justify-content-center">
                <Col lg="3">
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">User</Label>
                                    <Input
                                        type="text"
                                        name="text"
                                        value={user}
                                        onChange={event => setUser(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                </FormGroup>
                                <div className="text-center">
                                    {load == false ? (
                                        <Button color="primary" onClick={handleRegister}>Cadastrar</Button>
                                    ) : (
                                            <Button color="primary" onClick={handleRegister}>
                                            <Spinner color="light" /></Button>
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
                                <th className="text-center">User</th>
                                <th>Email</th>
                                <th className="text-center">Editar</th>
                                <th className="text-center">Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map(a => (
                                <tr key={a._id}>
                                    <th className="text-center" scope="row">{a.user}</th>
                                    <td>{a.email}</td>
                                    <td className="text-center">atualizar</td>
                                    <td onClick={handleDelete} className="text-center" style={{cursor:'pointer'}}>Deletar</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Col>
            </Row>
            <FooterPage />
        </div>
    );

}
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
    CardBody
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


    return (
        <div>
            <NavBar />
            <Row>
                <Col lg="2">
                    <Sidebar />
                </Col>
                <Col lg="9" className="mb-5 ml-5">
                    <Row className="mt-3">
                        <Col lg="4">
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
                                                <Button color="secundary" onClick={handleRegister}>Cadastrar</Button>
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
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Editar</th>
                                        <th>Deletar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {student.map(a => (
                                        <tr key={a._id}>
                                            <th scope="row">{a.user}</th>
                                            <td>{a.email}</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <FooterPage />
        </div>
    );

}
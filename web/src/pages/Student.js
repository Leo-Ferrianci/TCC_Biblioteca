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

export default function Home() {
    const [student, setStudent] = useState([])
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [controleler, setController] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function loadStudent() {
            const response = await api.get('/register');
            setStudent(response.data);
        }
        loadStudent();
    }, []);

    async function handleRegister() {
        setLoad(true)
        const response = await api.post(`/register`, {
            user,
            email,
            password
        }).catch(e => {
            setLoad(false)
            alert(e.response.data.error)
            window.location.reload()
        })

        if (response.data) {
            setLoad(false)
            setUser('')
            setEmail('')
            setPassword('')
            setController(0)
        }
    }


    return (
        <div>
            <NavBar />
            <Row>
                <Col lg="2">
                    <Sidebar />
                </Col>
                <Col lg="9" className="mb-5 ml-5">
                    <div className="d-flex justify-content-center">
                        <Card style={{ marginTop: 30, width: '80%' }}>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">User</Label>
                                        <Input
                                            type="text"
                                            name="text"
                                            placeholder="with a placeholder"
                                            value={user}
                                            onChange={event => setUser(event.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="with a placeholder"
                                            value={email}
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder="password placeholder"
                                            value={password}
                                            onChange={event => setPassword(event.target.value)}
                                        />
                                    </FormGroup>
                                    {load == false ? (
                                        <Button color="primary" onClick={handleRegister}>primary</Button>
                                    ) : (
                                            <Button color="secundary" onClick={handleRegister}>primary</Button>
                                        )}
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Table bordered className="" style={{ width: '80%' }}>
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
                    </div>
                </Col>
            </Row>
            <FooterPage />
        </div>
    );

}
import React, { useState } from 'react';
import '../assets/css/styles.css'
import '../assets/css/global.css'
import {
    Container,
    Form,
    Card,
    CardHeader,
    FormGroup,
    Input,
    Label,
    CardBody,
    Button,
} from 'reactstrap';


import api from '../services/api'

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function getAuthInfo() {
        const response = await api.post(`authenticate`, {
            email, password
        }).catch(e => {
            alert('Falha ao fazer o Login')
        });

        if (response.data) {
            localStorage.setItem('auth_id', response.data.user._id)
            localStorage.setItem('token', response.data.token)
            window.location.replace(`/create`)
        }
    }

    return (
        <>
            <Container 
            className="d-flex justify-content-center" >
                <Card
                    style={{
                        backgroundColor: "#eeeeee",
                        width: "40%",
                        height: 350,
                        marginTop: 150
                    }}
                >
                    <CardHeader className="cardheader text-center">
                        <span style={{ fontSize: 22 }} >
                            Login
                        </span>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={getAuthInfo} required>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup required>
                                <Label for="examplePassword">Senha</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    required
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </FormGroup>
                            <div className="text-center">
                                <Button
                                    style={{
                                        backgroundColor: "#8b0000",
                                        width: "25%",
                                        height: "5%",
                                        marginTop: 15
                                    }}
                                >
                                    Entrar
                                    </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    );

}
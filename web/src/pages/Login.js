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

import { get } from 'lodash'


import api from '../services/api'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [validationPassword, setvalidationPassword] = useState(false)
    const [validationEmail, setvalidationEmail] = useState(false)
    const [message, setMessage] = useState('')

    async function handleLogin() {
        setLoad(true)
        try {
          let response = await api.post(`/sessions`, { email, password })
          if (response.data) {
            localStorage.setItem('auth_id', response.data.user.id)
            localStorage.setItem('token', response.data.token.token)
            setTimeout(() => setLoad(false), 3000)
            window.location.replace(`/home`)
          }
        } catch (err) {
            console.log(err)
            setLoad(false)
        //   setLoad(false)
        //   const errors = get(e, 'response.data.0.message', [])
        //   const field = get(e, 'response.data.0.field', [])
        //   const validation = get(e, 'response.data.0.validation')
        //   console.log(errors)
        //   console.log(field)
        //   console.log(validation)

        //   if (validation === undefined) {
        //     setMessage('Email ou senha inseridos são invalidos!')
        //     setvalidationEmail(true)
        //     return
        //   } else {
        //     setvalidationEmail(false)
        //   }

        //   if (field === 'email' || field === 'password') {

        //     if (field === 'email') {
        //       setMessage(errors)
        //       setvalidationEmail(true)
        //     } else {
        //       setvalidationEmail(false)
        //     }

        //     if (field === 'password') {
        //       setMessage(errors)
        //       setvalidationPassword(true)
        //     } else {
        //       setvalidationPassword(false)
        //     }

        //   }
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
                        <Form required>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </FormGroup>
                            <FormGroup required>
                                <Label for="examplePassword">Senha</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </FormGroup>
                            <div className="text-center">
                                {load == false ? (
                                    <Button
                                        onClick={handleLogin}
                                        style={{
                                            backgroundColor: "#8b0000",
                                            width: "25%",
                                            height: "5%",
                                            marginTop: 15
                                        }}
                                    >

                                        Entrar
                                    </Button>
                                ) : (
                                        <>
                                        </>
                                    )}
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    );

}

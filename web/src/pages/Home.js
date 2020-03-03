import React, { useState } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import Sidebar from '../components/Sidebar'
import administracao from '../assets/img/book.png';
import {
    Col,
    Row,
    Card,
    CardHeader,
    CardText,
    DropdownItem,
    DropdownToggle,
    ButtonDropdown,
    DropdownMenu,
    Button,
    Collapse,
    CardBody,
} from 'reactstrap';

export default function Home() {
    return (
        <div>
            <NavBar />
            <Row >
                <Col lg="3">
                    <Sidebar />
                </Col>
                <Col lg="9">
                    {/* Card-1 */}
                    <Card style={{
                        marginLeft: 50,
                        marginTop: 50,
                        borderColor: '#8b0000',
                        width: '90%',
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
                                    <span style={{ fontSize: 30 }}>Administração</span>
                                </Col>
                                <Col lg="2" className="d-flex align-items-center justify-content-center">
                                   <a href="/curso">
                                    <Button

                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#8b0000',
                                            fontSize: 20
                                        }}
                                    >
                                        Acervo
                                    </Button>
                                    </a>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                    <Card style={{
                        marginLeft: 50,
                        marginTop: 50,
                        borderColor: '#8b0000',
                        width: '90%',
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
                                    <span style={{ fontSize: 30 }}>Administração</span>
                                </Col>
                                <Col lg="2" className="d-flex align-items-center justify-content-center">
                                   <a href="/curso">
                                    <Button

                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#8b0000',
                                            fontSize: 20
                                        }}
                                    >
                                        Acervo
                                    </Button>
                                    </a>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                    <Card style={{
                        marginLeft: 50,
                        marginTop: 50,
                        borderColor: '#8b0000',
                        width: '90%',
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
                                    <span style={{ fontSize: 30 }}>Administração</span>
                                </Col>
                                <Col lg="2" className="d-flex align-items-center justify-content-center">
                                   <a href="/curso">
                                    <Button

                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#8b0000',
                                            fontSize: 20
                                        }}
                                    >
                                        Acervo
                                    </Button>
                                    </a>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                    <Card style={{
                        marginLeft: 50,
                        marginTop: 50,
                        borderColor: '#8b0000',
                        width: '90%',
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
                                    <span style={{ fontSize: 30 }}>Administração</span>
                                </Col>
                                <Col lg="2" className="d-flex align-items-center justify-content-center">
                                   <a href="/curso">
                                    <Button

                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#8b0000',
                                            fontSize: 20
                                        }}
                                    >
                                        Acervo
                                    </Button>
                                    </a>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                    <Card style={{
                        marginLeft: 50,
                        marginTop: 50,
                        borderColor: '#8b0000',
                        width: '90%',
                        backgroundColor: '#fff',
                        marginBottom: 40
                        
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
                                    <span style={{ fontSize: 30 }}>Administração</span>
                                </Col>
                                <Col lg="2" className="d-flex align-items-center justify-content-center">
                                   <a href="/curso">
                                    <Button

                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#8b0000',
                                            fontSize: 20
                                        }}
                                    >
                                        Acervo
                                    </Button>
                                    </a>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
            <FooterPage />
        </div>
    );

}
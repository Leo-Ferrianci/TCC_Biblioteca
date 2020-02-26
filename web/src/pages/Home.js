import React, { useState } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import administracao from '../assets/img/book.png';
import mark from '../assets/img/marketing.png';
import auto from '../assets/img/automacao.png';
import ds from '../assets/img/desenvolvimento.png';
import logi from '../assets/img/logistica.png';
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
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const collapse = () => setIsOpen(!isOpen);
    const collapse2 = () => setIsOpen2(!isOpen2);
    const collapse3 = () => setIsOpen3(!isOpen3);
    const collapse4 = () => setIsOpen4(!isOpen4);

    return (
        <>
            <NavBar />
            <Row>
                <Col lg="3">
                    <Card
                        className="align-items-left"
                        style={{
                            backgroundColor: '#dddddd',
                            width: '100%', height: '100%',
                            borderRadius: 0
                        }}
                    >
                        {/* Collapse-1 */}
                        <div>
                            <Button
                                onClick={collapse}
                                style={{
                                    width: '100%',
                                    borderRadius: 0,
                                    border: 0,
                                    height: 60,
                                    backgroundColor: '#eeeeee'
                                }}>
                                <span style={{ color: '#000', fontSize: 20 }}>Menu Principal</span>
                            </Button>
                            <Collapse
                                isOpen={isOpen}
                            >
                                <Card>
                                    <CardBody className="text-center">
                                        <DropdownItem>Inicio</DropdownItem>
                                        <DropdownItem>Sobre</DropdownItem>
                                        <DropdownItem>Noticias</DropdownItem>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>

                        {/* Collapse-2 */}
                        <div>
                            <Button
                                onClick={collapse2}
                                style={{
                                    width: '100%',
                                    borderRadius: 0,
                                    border: 0,
                                    height: 60,
                                    backgroundColor: '#eeeeee'
                                }}>
                                <span style={{ color: '#000', fontSize: 20 }}>Cursos</span>
                            </Button>
                            <Collapse
                                isOpen={isOpen2}
                            >
                                <Card>
                                    <CardBody className="text-center">
                                        <DropdownItem>Adiministração</DropdownItem>
                                        <DropdownItem>Automação Industrial</DropdownItem>
                                        <DropdownItem>Desenvolvimento de Sistemas</DropdownItem>
                                        <DropdownItem>Logística</DropdownItem>
                                        <DropdownItem>Marketing</DropdownItem>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>

                        {/* Collapse-3 */}
                        <div>
                            <Button
                                onClick={collapse3}
                                style={{
                                    width: '100%',
                                    borderRadius: 0,
                                    border: 0,
                                    height: 60,
                                    backgroundColor: '#eeeeee'
                                }}>
                                <span style={{ color: '#000', fontSize: 20 }}>Mais Vistos</span>
                            </Button>
                            <Collapse
                                isOpen={isOpen3}
                            >
                                <Card>
                                    <CardBody className="text-center">
                                        <DropdownItem>Adiministração</DropdownItem>
                                        <DropdownItem>Automação Industrial</DropdownItem>
                                        <DropdownItem>Desenvolvimento de Sistemas</DropdownItem>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>

                        {/* Collapse-4 */}
                        <div>
                            <Button
                                onClick={collapse4}
                                style={{
                                    width: '100%',
                                    borderRadius: 0,
                                    border: 0,
                                    height: 60,
                                    backgroundColor: '#eeeeee'
                                }}>
                                <span style={{ color: '#000', fontSize: 20 }}>Mais Baixados</span>
                            </Button>
                            <Collapse
                                isOpen={isOpen4}
                            >
                                <Card>
                                    <CardBody className="text-center">
                                        <DropdownItem>Adiministração</DropdownItem>
                                        <DropdownItem>Automação Industrial</DropdownItem>
                                        <DropdownItem>Desenvolvimento de Sistemas</DropdownItem>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </Card>
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
                </Col>
            </Row>
            <FooterPage />
        </>
    );

}
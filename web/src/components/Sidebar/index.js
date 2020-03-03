import React, { useState } from 'react';
import {
    Card,
    DropdownItem,
    Button,
    Collapse,
    CardBody,
} from 'reactstrap';

export default function Sidebar() {
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
        </>
    )
}

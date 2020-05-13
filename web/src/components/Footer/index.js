import React from 'react';
import {
    Button,
    Nav,
    Navbar,
    FormControl,
    Col,
    Row,
    Container

} from 'reactstrap';

export default function FooterHome() { 
    return (
        <>
            <footer
                style={{ backgroundColor: "#8b0000" }}
                className="py-2 footer"
                id="footer-main"
            >
                <Container>
                <Row>
                    <Col>
                        <div>
                            <span style={{ color: '#fff' }}>DESENVOLVIDO POR:</span>
                        </div>
                        <div>
                            <span style={{ color: '#fff' }}>Leonardo Melo, Leonardo Souza, Luis</span>
                        </div>
                        <div>
                            <span style={{ color: '#fff' }}>Marcio, Matheus, Rafael </span>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <span style={{ color: '#fff' }}>Contatos</span>
                        </div>
                        <span style={{ color: '#fff' }}>Localização</span>
                    </Col>
                    <Col>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                    </Col>
                    </Row>
                    </Container>
            </footer>
        </>

    );
}
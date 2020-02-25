import React from 'react';
import {
    Button,
    Nav,
    Navbar,
    FormControl,
    Col,
    Row,

} from 'reactstrap';

export default function FooterHome() { 
    return (
        <>
            <footer
                style={{ backgroundColor: "#8b0000" }}
                className="py-2 footer"
          id="footer-main"
            >
                <Row>
                    <Col>
                        <div>
                            <scan style={{ color: '#fff' }}>DESENVOLVIDO POR:</scan>
                        </div>
                        <div>
                            <scan style={{ color: '#fff' }}>Leonardo Melo, Leonardo Souza, Luis</scan>
                        </div>
                        <div>
                            <scan style={{ color: '#fff' }}>Marcio, Matheus, Rafael </scan>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <scan style={{ color: '#fff' }}>Contatos</scan>
                        </div>
                        <scan style={{ color: '#fff' }}>Localização</scan>
                    </Col>
                    <Col>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>

                    </Col>

                </Row>
            </footer>
        </>

    );
}
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
    Input
} from 'reactstrap';

import api from "../services/api";

export default function Home() {
    const [course, setCourse] = useState([])
    const [name, setName] = useState([])

    useEffect(() => {
        async function loadCourse() {
            const response = await api.get('/course');
            setCourse(response.data);
        }
        loadCourse();
    }, []);


    return (
        <div>
            <NavBar />
            <Row>
                <Col lg="2">
                    <Sidebar />
                </Col>
                <Col lg="9" className="mb-5 ml-5">
                   <Card style={{marginTop:15}}>

                   </Card>
                </Col>
            </Row>
            <FooterPage />
        </div>
    );

}
import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/index'
import FooterPage from '../components/Footer/index';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import {
  Table,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import api from "../services/api";

export default function Course() {
  const [course, setCourse] = useState([])
  const [project, setProject] = useState([])

  useEffect(() => {
    async function loadCourse() {
        const response = await api.get(`/course`);
        setCourse(response.data.name);
    }
    loadCourse();
}, []);


  useEffect(() => {
    async function loadProject() {
      const _id = localStorage.getItem('_id')
      const response = await api.get(`/list_project?course=${_id}`).catch(e => {
        console.log('Falha na conexão')
      });
      setProject(response.data);
    }
    loadProject();
  }, []);

  return (
    <div>
      <NavBar />
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="text"
                placeholder="Search"
                style={{ width: '30%', marginTop: 20 }}
              />
            </FormGroup>

            <Table bordered style={{ width: '90%' }}>
              <thead style={{ alignItems: 'center' }}>
                <tr>
                  <th>TCC</th>
                  <th>Estudantes</th>
                  <th className="text-center">Ano </th>
                  <th className="text-center">Arquivo pdf</th>
                </tr>
              </thead>
              {project.map(a => (
                <tbody>
                  <tr className="align-items-center">
                    <th scope="row">{a.name}</th>
                    <td>{a.student.join(', ')}</td>
                    <td className="text-center">{a.year}</td>
                    <td className="text-center">
                      <span style={{ cursor: 'pointer' }}>
                        Download
                      </span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Form>
      <FooterPage />
    </div>
  );

}

Course.propTypes = {
  match: PropTypes.shape({}).isRequired,
}
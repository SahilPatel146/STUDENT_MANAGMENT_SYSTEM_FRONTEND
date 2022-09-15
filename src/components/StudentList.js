import React from "react";

import React, { useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import axios from "axios";

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    let getStudents = () => {
        axios
            .get("http://localhost:8080/listStudents")
            .then((response) => setStudents(response.data))
            .catch((error) => alert(error));
    };
    return (
        <div className="my-3">
            <Container>
                <Card.Header><h3>Students List</h3></Card.Header>
                <Card.Header>
                    <h3>Students List</h3>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Student Id</th>
                                <th>Student Name</th>
                                <th>Student Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                            </tr>
                            {students.length === 0 ? (
                                <tr>
                                    <td colSpan={3}>{students.length} Studnets Available!!!</td>
                                </tr>
                            ) : (
                                students.map((student) =>
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.address}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Container>
        </div>
    );
}
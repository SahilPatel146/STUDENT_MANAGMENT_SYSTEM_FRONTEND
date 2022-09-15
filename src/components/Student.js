import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";


export default function Student() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    let student = {
        id: id,
        name: name,
        address: address
    }
    let textChanged = (event) => {
        if (event.target.name === "id") {
            setId(event.target.value);
        } else if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "address") {
            setAddress(event.target.value);
        }
    }
    let saveStudent = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/student", student)
            .then(response => {
                if (response.data != null) {
                    alert('Record added successfully');
                }
            })
            .catch(error => alert(error));
    }
    return (
        <div className="my-3">
            <Container>
                <Card>
                    <Form>
                        <Form onSubmit={saveStudent}>
                            <Card.Header>Add Student Information</Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" />
                                        <Form.Control name="id" value={id} type="text" placeholder="Enter id" onChange={textChanged} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter email" />
                                            <Form.Control name="name" value={name} type="text" placeholder="Enter name" onChange={textChanged} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter email" />
                                                <Form.Control name="address" value={address} type="text" placeholder="Enter address" onChange={textChanged} />
                                            </Form.Group>
                                        </Form.Group>
                                        <Card.Footer>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Card.Footer>
                                    </Form.Group>
                                </Form.Group>
                            </Card.Body>
                        </Form>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}
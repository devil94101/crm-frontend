import React from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'
const Login = ({ formValues, onChange, handleSubmit, switchFrom }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info'>Client Login</h1>
                    <hr />

                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Email Address
                            </Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                placeholder='Enter Email'
                                onChange={onChange}
                                value={formValues['email']}
                            />

                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder='Enter Password'
                                onChange={onChange}
                                value={formValues['password']}
                            />

                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <a href='#' onClick={()=>switchFrom('reset')}>
                        Forgot Password?
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
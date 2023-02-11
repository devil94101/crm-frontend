import React, { useState } from 'react'
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap'
import "./addticket.style.css";

const AddTicketForm = ({handleOnChange, onSubmit, frmData, frmDataError }) => {

    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">

            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            {/* <div>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMsg && <Alert variant="primary">{successMsg}</Alert>}
                {isLoading && <Spinner variant="primary" animation="border" />}
            </div> */}
            <Form autoComplete="off" onSubmit={onSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Subject
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="subject"
                            value={frmData.subject}
                            // minLength="3"
                            maxLength="100"
                            onChange={handleOnChange}
                            placeholder="Subject"
                            required
                        />
                        <Form.Text className="text-danger">
                            {frmDataError.subject && "SUbject is required!"}
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Issue Found
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="date"
                            name="issueDate"
                            value={frmData.issueDate}
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        rows="5"
                        value={frmData.message}
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="info" block>
                    Open Ticket
                </Button>
            </Form>
        </Jumbotron>
    )
}

export default AddTicketForm
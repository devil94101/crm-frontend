import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import BreadCrumComp from '../../components/breadcrum/BreadCrum.comp'

const AddTicket = () => {

    const [frmData, setfrmData] = useState({})
    const [frmDataError, setfrmDataError] = useState({})

    const handleOnChange = (e) => {
        let { name, value } = e.target
        let newFrmValue = { ...frmData }
        newFrmValue[name] = value
        setfrmData(newFrmValue)
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumComp page={'New Ticket'} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm
                        handleOnChange={handleOnChange}
                        onSubmit={onSubmit}
                        frmData={frmData}
                        frmDataError={frmDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket
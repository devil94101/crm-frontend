import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumComp from '../../components/breadcrum/BreadCrum.comp';
import AllticketData from '../../assets/dummyData.json'
import MessageHistory from '../../components/MessageHistory/MessageHistory.comp';
import UpdateTicket from '../../components/updateTicket/UpdateTicket.comp';
import { useParams } from 'react-router';

const Ticket = () => {

    let {tid} = useParams()
    const [message, setMessage] = useState('')
    const [ticket, setTicket] = useState({})
    const handleOnChange = (e) =>{
        setMessage(e.target.value)
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
    }

    useEffect(()=>{
        if(tid){
            let ticketData = AllticketData.filter(ele=>ele._id==tid)
            setTicket(ticketData[0])
        }
        
    },[tid])

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumComp page="Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* {isLoading && <Spinner variant="primary" animation="border" />}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {replyTicketError && (
                        <Alert variant="danger">{replyTicketError}</Alert>
                    )}
                    {replyMsg && <Alert variant="success">{replyMsg}</Alert>} */}
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">Subject: {ticket.subject}</div>
                    <div className="date">
                        Ticket Opened: {ticket.addedAt}
                       
                    </div>
                    <div className="status">Status: {ticket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button
                        variant="outline-info"
                        // onClick={() => dispatch(closeTicket(tId))}
                        // disabled={selectedTicket.status === "Closed"}
                    >
                        Close Ticket
                    </Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                   <MessageHistory msg={ticket.history||[]}/>
                </Col>
            </Row>
            <hr />

            <Row className="mt-4">
                <Col>
                    <UpdateTicket 
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        message={message}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket
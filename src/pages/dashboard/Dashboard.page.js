import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import TicketTable from '../../components/ticketTable/TicketTable.comp';
import TicketsData from '../../assets/dummyData.json'
import BreadCrumComp from '../../components/breadcrum/BreadCrum.comp';
const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <BreadCrumComp page={'dashboard'} />
            </Col>
        </Row>
        <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
        </Row>
        <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: {18}</div>
          <div>Pending tickets: {5}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={TicketsData} />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
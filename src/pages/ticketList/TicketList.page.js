import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BreadCrumComp from '../../components/breadcrum/BreadCrum.comp'
import SearchForm from '../../components/searchForm/SearchForm.comp'
import TicketTable from '../../components/ticketTable/TicketTable.comp'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {fetchAllTickets} from './ticketActions'

const TicketList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllTickets())
     
    }, [dispatch])
    

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumComp page="Ticket Lists" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Link to="/add-ticket">
                        <Button variant="info">Add New Ticket</Button>
                    </Link>
                </Col>
                <Col className="text-right">
                    <SearchForm />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable />
                </Col>
            </Row>
        </Container>
    )
}

export default TicketList
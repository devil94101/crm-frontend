import React, { useEffect, useState } from 'react'
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { filterSearchTickets } from '../../pages/ticketList/ticketActions';

const SearchForm = () => {

  const [str, setStr] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterSearchTickets(str))
  }, [str])

  return (
    <div>
      <Form onSubmit={(e) => {
        e.preventDefault()
      }}>
        <Form.Group as={Row} >
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={(e) => {
                setStr(e.target.value)
              }}
              placeholder="Search ..."
              value={str}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchForm
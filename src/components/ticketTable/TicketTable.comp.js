import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const TicketTable = () => {
    const { displayList, isLoading, error } = useSelector(state=>state.tickets)

    if(isLoading){
        return <p>...Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subjects</th>
                        <th>Status</th>
                        <th>Opened Date</th>
                    </tr>
                </thead>
                <tbody>
                    {displayList.length ? (
                        displayList.map((row) => (
                            <tr key={row._id}>
                                <td>{row._id}</td>
                                <td>
                                    <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
                                    
                                </td>
                                <td>{row.status}</td>
                                <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No ticket show{" "}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default TicketTable
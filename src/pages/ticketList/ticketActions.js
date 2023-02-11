
import { getAllTickets } from '../../api/ticketsApi'
import {
    fetchTicketSuccess,fetchTicketLoading,fetchTicketFail,searchTickets
} from './ticketSlice'


export const fetchAllTickets = () => async (dispatch) =>{
    dispatch(fetchTicketLoading())
    try{

        let res = await getAllTickets()
        dispatch(fetchTicketSuccess(res))
    }
    catch(err){

        console.log(err)
        dispatch(fetchTicketFail(err.message))
    }

}

export const filterSearchTickets = (str) => dispatch =>{
    console.log(str,"chala kya")
    dispatch(searchTickets(str))
}
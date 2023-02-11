import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tickets: [],
  isLoading: false,
  error:'',
  displayList: []

}

const ticketSlice = createSlice({
    name:"ticketList",
    initialState,
    reducers:{
        fetchTicketLoading: (state,action)=>{
            state.isLoading = true
        },
        fetchTicketSuccess: (state,action)=>{
            state.isLoading = false
            state.tickets = action.payload
            state.displayList = action.payload
        },
        fetchTicketFail: (state,action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        searchTickets: (state,action ) =>{
            let str =action.payload
            state.displayList = state.tickets.filter(row=>{
                if(!str) return true
                return row.subject.toLowerCase().includes(str.toLowerCase())
            })
        }
    }
})

const { reducer, actions } = ticketSlice

export const {
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    searchTickets
} = actions

export default reducer
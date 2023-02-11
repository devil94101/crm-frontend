import { configureStore } from '@reduxjs/toolkit'
import TicketListReducer from './pages/ticketList/ticketSlice'
export const store = configureStore({
  reducer: {
    tickets: TicketListReducer
  },
})
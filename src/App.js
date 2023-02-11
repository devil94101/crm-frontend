import './App.css';
import { Entry } from './pages/entry/entry.page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard.page';
import AddTicket from './pages/new-ticket/AddTicket.page';
import TicketList from './pages/ticketList/TicketList.page';
import Ticket from './pages/ticket/ticket.page';
import React from 'react';  
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import PrivateRoute from './components/privateRoute/PrivateRoute.comp';

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<DefaultLayout />}>
          <Route path="/add-ticket" element={<PrivateRoute>
            <AddTicket />
          </PrivateRoute>} />

          <Route path="/tickets" element={<PrivateRoute>
            <TicketList />
          </PrivateRoute>} />
          <Route path="/ticket/:tid" element={<PrivateRoute>
            <Ticket/>
          </PrivateRoute>} />
          <Route path="/" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
        </Route>

        <Route path="/login" element={<PrivateRoute>
            <Entry />
          </PrivateRoute>} />
        <Route path="*" element={<div>Error not found</div>} />
      </Routes>

    </Router>
  );
}

export default App;

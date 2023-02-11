import React from 'react'
import './style.css'
const MessageHistory = ({msg}) => {

    if (!msg) return null;
    return msg.map((row, i) => (
        <div key={i} className="message-history mt-3">
          <div className="send font-weight-bold text-secondary">
            <div className="sender">{row.messageBy}</div>
            <div className="date">
              {row.date || new Date(row.date).toLocaleString()}
            </div>
          </div>
          <div className="message">{row.message}</div>
        </div>
      ));
}

export default MessageHistory
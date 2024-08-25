import { useDispatch } from 'react-redux';
import { sendMessage } from '../../Services/Action/taskAction';
import './MessageBox.css'
import { useState } from 'react';

const MessageBox = ({ taskId, onClose }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage(taskId, message));
      onClose(); // Close the message box after sending
    }
  };

  return (
    <div className="message-box">
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
      />
      <div className="message-box__actions">
        <button onClick={handleSendMessage}>Send</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default MessageBox;

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import ReactModal from 'react-modal';

const CalendarPage = () => {
  // Set the app element for accessibility
  ReactModal.setAppElement('#root');

  // State to handle selected date, notes, modal open state, and note text
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteText, setNoteText] = useState('');

  // Handle the date click event to open the modal
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setNoteText(notes[date.toDateString()] || ''); // Get the note for the selected date or empty
    setIsModalOpen(true);
  };

  // Save the note when the user clicks 'Save Note'
  const handleSaveNote = () => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [selectedDate.toDateString()]: noteText,
    }));
    setIsModalOpen(false);
  };

  // Function to highlight dates that have notes
  const tileClassName = ({ date }) => {
    if (notes[date.toDateString()]) {
      return 'highlighted'; // Apply 'highlighted' class to dates with notes
    }
    return null;
  };

  return (
    <div className="container calendar-page">
      <h1>Calendar</h1>
      <Calendar
        onClickDay={handleDateClick} // When a day is clicked, call handleDateClick
        value={selectedDate} // Set the current selected date
        tileClassName={tileClassName} // Apply className to tiles based on notes
      />
      <ReactModal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Add Note for {selectedDate && selectedDate.toDateString()}</h2>
        <textarea 
          value={noteText} 
          onChange={(e) => setNoteText(e.target.value)} 
          rows="5"
        />
        <button onClick={handleSaveNote}>Save Note</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </ReactModal>
    </div>
  );
};

export default CalendarPage;

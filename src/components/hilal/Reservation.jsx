import React, { useState } from 'react';
import './reservation.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getDatabase, ref, push, set } from 'firebase/database';

function Reservation() {
    const [valid, setValid] = useState(true);
    const [hide, setHide] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        document.getElementById('book-date').value = date.toISOString().split('T')[0]; // Update date input field
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');

        if (!book_date.value || !book_time.value) {
            alert('Please fill all the fields');
        } else {
            writeUserData(book_date.value, book_time.value);
        }
    };

    const writeUserData = (date, time) => {
        const db = getDatabase();
        const reservationsRef = ref(db, 'reservations');
        const newReservationRef = push(reservationsRef);
        set(newReservationRef, {
            bookingdate: date,
            bookingtime: time,
        }).then(() => {
            alert('Your booking has been made');
        }).catch((error) => {
            console.error('Error writing new reservation to Firebase Database', error);
        });
    };

    return (
        <div>
            <div className="containerReservation">
                <div className="contentReservation">
                    <div className="textReservation">Make a Reservation!</div>
                    <div className="form2">
                        <div className="txtReservation">Date & Time</div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="inputDataRes">
                                <input
                                    type="date"
                                    name=""
                                    id="book-date"
                                    min={new Date().toISOString().split('T')[0]}
                                    value={selectedDate.toISOString().split('T')[0]}
                                    onChange={(e) => handleDateChange(new Date(e.target.value))}
                                />
                            </div>
                            <div className="inputDataRes">
                                <input type="time" name="" id="book-time" />
                            </div>
                            <div className="book">
                                <button type="submit">Book Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="calendarContainer">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            minDate={new Date()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservation;


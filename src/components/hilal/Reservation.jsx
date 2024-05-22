import React from 'react'
import './reservation.css'
import { useState } from 'react'
import {getDatabase, ref, set} from 'firebase/database';



function Reservation() {

    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        

        if(!book_date.value || !book_time.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'data/'), {
            bookingdate: book_date.value,
            bookingtime: book_time.value,
            });
        }
            alert('Your booking has been made');
            
        }
    }

  return (
    <div>
        <div className="containerReservation">
            <div className="contentReservation">
                <div className="textReservation">Make a Reservation! </div>
                <div className="form2">
                    <div className="txtReservation">Date & Time</div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="inputDataRes">
                            <input type="date" name='' id='book-date' />
                        </div>
                        <div className="inputDataRes">
                            <input type="time" name='' id='book-time' />
                        </div>
                        <div className="book">
                            <button type='submit'> Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reservation

import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditUser = () => {
    // const { user } = useContext(AuthContext);
    const [setBooking] = useState({
        patient: '',
        treatment: '',
        email: '',
        phone: '',
        appointmentDate: '',
        slot: '',
        address: ''
    });
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        loadBooking();
    },);


    const loadBooking = async () => {
        const res = await fetch(`https://booking-app-server-green.vercel.app/bookings/admin?_id=${id}`)
        setBooking(res.data);
    }
    return (
        <div>
            <Link className='btn btn-info text-white' to='/'>Back to Home </Link>
            <h1>Booking Id: {id}</h1>
            <hr />
            <ul>
                <li>email: </li>
            </ul>
        </div>
    );
};

export default EditUser;
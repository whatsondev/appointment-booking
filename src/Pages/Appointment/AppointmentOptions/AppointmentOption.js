import React from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import './AppointmentOption.css';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card container">
            <div className="card-body">
                <div>
                    <h2 className="service-title">{name}</h2>
                </div>
                <p id='time'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p id='slot'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions appointment">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn book-button"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment <ArrowForwardIos />
                    </label>
                </div>
            </div>
        </div>

    );
};

export default AppointmentOption;
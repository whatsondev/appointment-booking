import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import Home from '../../Home/Home/Home';
const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <div>
                <AppointmentBanner
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                ></AppointmentBanner>

                <AvailableAppointments
                    selectedDate={selectedDate}
                ></AvailableAppointments>
            </div>
            <div>
              <Home></Home>
            </div>
        </div>


    );
};

export default Appointment;
import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import About from '../../Home/About/About';
import ClientSection from '../../Home/ClientSection/ClientSection';
import SocialSection from '../../Home/SocialSection/SocialSection';

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
                <About></About>
                <ClientSection></ClientSection>
                <SocialSection></SocialSection>
            </div>
        </div>


    );
};

export default Appointment;
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from '../AppointmentOptions/AppointmentOption';
import './AvailableAppointments.css';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://booking-app-server-green.vercel.app/v2/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className=''>
            <header className='my-24 max-w-[1200px] mx-auto container'>
                <p className='text-center top-service'>Our Services</p>
                <p className='text-center time'>Available Services on {format(selectedDate, 'PP')}</p>
                <div className='card grid gap-7 sm:gap-6 lg:gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3  max-sm:mt-6 mx-auto'>
                    {
                        appointmentOptions.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                    }
                </div>
                {
                    treatment &&
                    <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingModal>}
            </header>
            {/* <div>
                <About></About>
                <ClientSection></ClientSection>
                <SocialSection></SocialSection>
            </div> */}
        </section>
    );
};

export default AvailableAppointments;
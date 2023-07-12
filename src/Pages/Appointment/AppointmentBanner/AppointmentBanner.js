import { DayPicker } from 'react-day-picker';
import './AppointmentBanner.css'
import WaveShape from '../../Home/WaveShape/WaveShape';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header id="overlay" className=''>
            <div className="hero ">
                <div className="hero-content flex-col  justify-center">
                    <WaveShape />
                    <div className='calender  flex justify-center items-center w-full'>
                        <DayPicker className='container'
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
            <div className='cal-round'>
                <div className='rounded-full ellipse'></div>
                <div className='rounded-full ellipse'></div>
            </div>
        </header>
    );
};

export default AppointmentBanner;
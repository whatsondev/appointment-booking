import { DayPicker } from 'react-day-picker';
import './AppointmentBanner.css'
import WaveShape from '../../Home/WaveShape/WaveShape';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header id="overlay" className=''>
            <div className="hero container">
                <div className="hero-content flex-col container">
                    <WaveShape />
                    <div className='calender'>
                        <DayPicker className='container'
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        {/* <p>You have selected date: {format(selectedDate, 'PP')}</p> */}
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
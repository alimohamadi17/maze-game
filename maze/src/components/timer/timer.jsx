import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Swal from 'sweetalert2'
import './styletimer.css'


//use Swal(sweetalert2) for try again in alert
const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">
            {/* 
            Try Again :  after the time  finished,  have an alert to start again, and in 
            this step clear Token from localStorage and then redirect to login page
            //start
            */}
            {Swal.fire({
                title: 'Game Over',
                text: "once again?",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Try Again!'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear(); //clear Token
                    window.location = '/' //redirect
                }
            })}
            {/* End */}
        </div>;
    }

    return (
        <div className="timer">
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
        </div>
    );
};

const Timer = () => {
    return (
        <div className="App">

            <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying
                    duration={1800}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                    {renderTime}
                </CountdownCircleTimer>

            </div>

        </div>
    );
}


export default Timer
import './App.css';
import { useState } from 'react';
import Info from './components/info';

const App = () => {
    const [birthday, setBirthday] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <div className="container">
            <h1>Welcome to Birthdaze</h1>
            <form className="birthday-form" onSubmit={handleSubmit}>
                <label for="birthday">Please enter your birth date:</label>
                <input type="date" value={birthday} id="birthday" name="birthday" onChange={(e) => setBirthday(e.target.value)} />
                <input type="submit" />
            </form>
            {isSubmitted && <Info birthday={birthday} />}
        </div>
    )
}

export default App;

// const [time, setTime] = useState('');

// const convertTime = (time) => {
//     let myTime = time.split(":");
//     let newTime = ( ((myTime[0]*60)*60) + (myTime[1]*60) )
//     return newTime;
// }

// let newDate = convertDate(birthday);
// let newTime = convertTime(time);
// let fullTime = newDate + newTime;
// fullTime = (new Date(fullTime*1000));
// console.log(fullTime);

// <br />
// <label for="time">Please enter your birth time:</label>
// <input type="time" value={time} id="time" name="time" onChange={(e) => setTime(e.target.value)} />

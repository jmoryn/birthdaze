import './App.css';
import { useState } from 'react';

function App() {

    const [birthday, setBirthday] = useState('');
    const [time, setTime] = useState('');

    const convertDate = (date) => {
        let myDate = date;
        myDate = myDate.split("-");
        let newDate = new Date(myDate);
        console.log(new Date(newDate).getTime() / 1000);
        console.log(newDate);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(birthday);
        convertDate(birthday);
        console.log(time);
    }

    return (
        <div className="container">
            <h1>Welcome to Birthdaze</h1>
            <form onSubmit={handleSubmit}>
                <label for="birthday">Please enter your birth date:</label>
                <input type="date" value={birthday} id="birthday" name="birthday" onChange={(e) => setBirthday(e.target.value)} />
                <br />
                <label for="time">Please enter your birth time:</label>
                <input type="time" value={time} id="time" name="time" onChange={(e) => setTime(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default App;

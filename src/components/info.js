import '../App.css';
import '../App.js';

const Info = (props) => {

    // Take user input and convert it to unix time
    const convertDate = (date) => {
        let myDate = date.split("-");
        let newDate = new Date(myDate);
        let dateInSeconds = (new Date(newDate).getTime());
        return dateInSeconds;
    }

    const toNewDate = (date) => {
        let newDate = date
        newDate = new Date(newDate)
        return newDate.toDateString()
    }
    // Add a million seconds to user birthday
    const addMillion = (date) => {
        let dateInSeconds = date
        dateInSeconds = dateInSeconds + 1000000000
        return dateInSeconds
    }
    // add a billion seconds to user birthday
    const addBillion = (date) => {
        let dateInSeconds = date
        dateInSeconds = dateInSeconds + 1000000000000
        return dateInSeconds
    }
    // add a trillion seconds to user birthday
    const addTrillion = (date) => {
        let dateInSeconds = date
        dateInSeconds = dateInSeconds + 1000000000000000
        return dateInSeconds
    }

    return (
        <div>
            <h2>If your birthday was {toNewDate(convertDate(props.birthday))}...</h2>
            <h4>You were a million seconds old on {toNewDate(addMillion(convertDate(props.birthday)))}</h4>
            <h4>and were/will be a billion seconds old on {toNewDate(addBillion(convertDate(props.birthday)))}</h4>
            <h4>and if you're Keith Richards, will be a trillion seconds old on {toNewDate(addTrillion(convertDate(props.birthday)))}</h4>
        </div>
    )
}

export default Info;

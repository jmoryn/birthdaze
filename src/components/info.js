import '../App.css';
import '../App.js';

const Info = (props) => {

    const convertDate = (date) => {
        let myDate = date.split("-");
        let newDate = new Date(myDate);
        let dateInSeconds = (new Date(newDate).getTime() / 1000);
        return dateInSeconds;
    }

    const toNewDate = (date) => {
        let newDate = date * 1000
        newDate = new Date(newDate)
        return newDate.toDateString()
    }

    const addMillion = (date) => {
        let dateInSeconds = date
        dateInSeconds = dateInSeconds + 1000000
        return dateInSeconds
    }

    const addBillion = (date) => {
        let dateInSeconds = date
        dateInSeconds = dateInSeconds + 1000000000
        return dateInSeconds
    }
    return (
        <div>
            <h2>If your birthday was {toNewDate(convertDate(props.birthday))}...</h2>
            <h4>You were a million seconds old on {toNewDate(addMillion(convertDate(props.birthday)))}</h4>
            <h4>You were a billion seconds old on {toNewDate(addBillion(convertDate(props.birthday)))}</h4>
        </div>
    )
}

export default Info;

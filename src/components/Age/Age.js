import React from "react";
import { TranslationContext } from "../../contexts/translationContext";
import Hands from "../Hands/Hands";
import "./Age.css";
import "./styles/__section/Age__section.css";

function Age(props) {
  const [yearsOld, setYearsOld] = React.useState(0);
  const [monthesOld, setMonthesOld] = React.useState(0);
  const [weeksOld, setWeeksOld] = React.useState(0);
  const [daysOld, setDaysOld] = React.useState(0);
  const [hoursOld, setHoursOld] = React.useState(0);
  const [minutesOld, setMinutesOld] = React.useState(0);
  const [secondsOld, setSecondsOld] = React.useState(0);
  const translation = React.useContext(TranslationContext);
  const intervalTime = 1000;
  const intervalRef = React.useRef(intervalTime);
  intervalRef.current = intervalTime;

  const digitCheker = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  React.useEffect(() => {
    function getTimeFromBirth() {
      const birthMonth = 1;
      const birthDay = 3;
      const birthYear = 1987;
      const now = new Date();
      const birth = new Date(
        `${digitCheker(birthMonth)} ${digitCheker(birthDay)} ${birthYear}`
      );
      let res = now - birth;
      let countdown = res / (365 * 24 * 60 * 60 * 1000);
      const years = Math.floor(countdown);
      setYearsOld(years);
      const lastBirthYear = new Date(
        `${digitCheker(birthMonth)} ${digitCheker(birthDay)} ${
          birthYear + years
        }`
      );
      res = now - lastBirthYear;
      countdown = res / (24 * 60 * 60 * 1000);
      const monthes = Math.floor(countdown / 30.42);
      setMonthesOld(monthes);
      const lastBirthMouth = new Date(
        `${birthMonth + monthes} ${digitCheker(birthDay)} ${birthYear + years}`
      );
      res = now - lastBirthMouth;
      countdown = res / (7 * 24 * 60 * 60 * 1000);
      const weeks = Math.floor(countdown);
      setWeeksOld(weeks);
      const lastBirthWeek = new Date(
        `${birthMonth + monthes} ${birthDay + weeks * 7} ${birthYear + years}`
      );
      res = now - lastBirthWeek;
      countdown = res / (24 * 60 * 60 * 1000);
      const days = Math.floor(countdown);
      setDaysOld(days);
      const lastBirthDay = new Date(
        `${now.toString().split(" ")[1]} ${now.toString().split(" ")[2]} ${
          birthYear + years
        }`
      );
      res = now - lastBirthDay;
      countdown = res / (60 * 60 * 1000);
      const hours = Math.floor(countdown);
      setHoursOld(hours);
      const lastBirthHour = new Date(
        `${now.toString().split(" ")[1]} ${now.toString().split(" ")[2]}, ${
          birthYear + years
        } ${digitCheker(hours)}:00:00`
      );
      res = now - lastBirthHour;
      countdown = res / (60 * 1000);
      let mins = Math.floor(countdown);
      setMinutesOld(mins);
      const lastBirthMin = new Date(
        `${now.toString().split(" ")[1]} ${now.toString().split(" ")[2]}, ${
          birthYear + years
        } ${digitCheker(hours)}:${digitCheker(mins)}:00`
      );
      res = now - lastBirthMin;
      countdown = res / 1000;
      let secs = Math.floor(countdown);
      setSecondsOld(secs);
    }
    intervalRef.current = intervalTime;
    let timer = setInterval(getTimeFromBirth, intervalRef.current);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Age">
      <section className="Age__section">
        <h4>
          {translation.years}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={yearsOld} images={props.images} />
        ) : (
          <h3>{yearsOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation.mounthes}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={monthesOld} images={props.images} />
        ) : (
          <h3>{monthesOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation.weeks}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={weeksOld} images={props.images} />
        ) : (
          <h3>{weeksOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation.days}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={daysOld} images={props.images} />
        ) : (
          <h3>{daysOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation.hours}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={hoursOld} images={props.images} />
        ) : (
          <h3>{hoursOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation.minutes}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={minutesOld} images={props.images} />
        ) : (
          <h3>{minutesOld}</h3>
        )}
      </section>
      <section className="Age__section">
        <h4>
          {translation.seconds}
          {":"}
        </h4>
        {props.binary ? (
          <Hands number={secondsOld} images={props.images} />
        ) : (
          <h3>{secondsOld}</h3>
        )}
      </section>
    </div>
  );
}

export default Age;

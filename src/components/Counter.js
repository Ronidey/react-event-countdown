import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      seconds: 0
    };

    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    let eventTime,
      currentTime,
      totalRemainingTime,
      days,
      hours,
      mins,
      seconds,
      formatTime;

    formatTime = (time) => (time < 10 ? `0${time}` : time);

    eventTime = new Date(this.props.eventDate);
    currentTime = new Date();
    totalRemainingTime = (eventTime - currentTime) / 1000;

    days = Math.floor(totalRemainingTime / 3600 / 24);
    hours = Math.floor(totalRemainingTime / 3600) % 60;
    mins = Math.floor(totalRemainingTime / 60) % 60;
    seconds = Math.floor(totalRemainingTime % 60);

    this.setState({
      days: formatTime(days),
      hours: formatTime(hours),
      mins: formatTime(mins),
      seconds: formatTime(seconds)
    });
  }

  render() {
    const { days, hours, mins, seconds } = this.state;

    return (
      <div className='remaining-time'>
        <div className='box'>
          <h2>{days}</h2>
          <p>days</p>
        </div>
        <div className='box'>
          <h2>{hours}</h2>
          <p>hours</p>
        </div>
        <div className='box'>
          <h2>{mins}</h2>
          <p>minutes</p>
        </div>
        <div className='box'>
          <h2>{seconds}</h2>
          <p>seconds</p>
        </div>
      </div>
    );
  }
}

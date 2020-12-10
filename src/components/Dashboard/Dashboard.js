import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllSchedule } from '../../actions/scheduleAction'
import Moment from "react-moment";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: []
    }
  }
  componentDidMount() {
    this.props.getAllSchedule()
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps ', nextProps.schedule.schedules)
    let schedules = nextProps.schedule.schedules;
    this.setState({
      schedules: schedules
    }, () => {
      console.log('schedules after change ', this.state.schedules)
    })
  }

  render() {
    const { schedules } = this.state;
    console.log('schedules list ', schedules);
    let schedulesList = schedules.map((schedule, index) => (
      <div class="card" key={index}>
        <h5 class="card-header">Interview {index+1}</h5>
        <div class="card-body">
          <p class="card-text">Interviewer Name: {schedule?.interviewerName}</p>
          <p class="card-text">Interviewee Name: {schedule?.intervieweeName}</p>
          <p class="card-text">Interviewer Email: {schedule?.interviewerEmail}</p>
          <p class="card-text">Interviewee Email: {schedule?.intervieweeEmail}</p>
          <p class="card-text">
            Scheduled on: <Moment format="ddd, MMM YYYY">{schedule?.date}</Moment>
            </p>
          <p class="card-text">Start time: {schedule?.start}</p>
          <p class="card-text">End time: {schedule?.end}</p>
          <a href={schedule?.resume} target="_blank" class="btn btn-primary">Resume link</a>
        </div>
      </div>
    ));
    return (
      <div>
          <h1>Get all your scheduled interviews!</h1>
          {schedulesList}
        </div>
    )
  }
}

// map state to props 
const mapStateToProps = (state) => ({
  schedule: state.schedule
})

export default connect(mapStateToProps, { getAllSchedule })(Dashboard);
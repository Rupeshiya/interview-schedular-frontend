import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createSchedule, uploader } from '../../actions/scheduleAction'

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervieweeName: '',
      interviewerName: '',
      intervieweeEmail: '',
      interviewerEmail: '',
      date: '',
      start: '',
      end: '',
      resume: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps in scheduler', nextProps)
  }

  scheduleClick = () => {
    const { intervieweeName, interviewerName, intervieweeEmail, interviewerEmail, date, start, end} = this.state;
    const scheduleInfo = {
      intervieweeName: intervieweeName,
      interviewerName: interviewerName,
      intervieweeEmail: intervieweeEmail,
      interviewerEmail: interviewerEmail,
      date: date,
      start: start,
      end: end
    }
    this.props.createSchedule(scheduleInfo);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  uploadSubmit = (e) => {
    e.preventDefault();
    this.props.uploader();
  }

  render() {
    return (
      <div>
        <h1>Schedule your interview!</h1>
        <div>
          <form>
             <div className="row">
               <div className="col">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Interviewer name"
                    name="interviewerName"
                    onChange={this.onChange}
                  />
               </div>
               <div className="col">
                 <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Interviewee name"
                  name="intervieweeName"
                  onChange={this.onChange}
                />
               </div>
             </div><br/>
             <div className="row">
               <div className="col">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Interviewer email"
                    name="interviewerEmail"
                    onChange={this.onChange}
                  />
               </div>
               <div className="col">
                 <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Interviewee email"
                  name="intervieweeEmail"
                  onChange={this.onChange}
                />
               </div>
             </div><br/>
             <div className="row">
               <div className="col">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Interview date"
                    name="date"
                    onChange={this.onChange}
                  />
               </div>
               <div className="col">
                 <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Start time"
                  name="start"
                  onChange={this.onChange}
                />
               </div>
                <div className="col">
                 <input 
                  type="text" 
                  className="form-control" 
                  placeholder="End time"
                  name="end"
                  onChange={this.onChange}
                />
               </div>
             </div><br/>
              <form action="http://localhost:5000/upload" encType="multipart/form-data" method="post">
              <input type="text" name="title" /><br/>
              <input type="file" name="upload" multiple="multiple" /><br/>
              <input type="submit" value="Upload" />
            </form>
             <button 
              type="button" 
              className="btn btn-primary btn-block" 
              onClick={this.scheduleClick}
            >Schedule Interview</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  schedule: state.schedule
})

export default connect(mapStateToProps, { createSchedule, uploader })(Schedule);
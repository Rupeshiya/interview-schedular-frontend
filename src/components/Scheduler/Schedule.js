import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createSchedule } from '../../actions/scheduleAction'
import axios from 'axios';

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
      resume: '',
      selectedFile: null
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps in scheduler', nextProps)
  }

  scheduleClick = () => {
    const { intervieweeName, interviewerName, intervieweeEmail, interviewerEmail, date, start, end, resume} = this.state;
    const scheduleInfo = {
      intervieweeName: intervieweeName,
      interviewerName: interviewerName,
      intervieweeEmail: intervieweeEmail,
      interviewerEmail: interviewerEmail,
      date: date,
      start: start,
      end: end,
      resume: resume
    }
    console.log('schedule ', scheduleInfo);
    this.props.createSchedule(scheduleInfo);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeHandler = (event)=>{
    let files = event.target.files
    console.log(files[0]);
    this.setState({
      selectedFile: files[0]
    })
  }

  onUploadHandler = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('upload', this.state.selectedFile)
    axios.post("http://localhost:5000/upload", data)
    .then(res => { 
        console.log('upload response ', res);
        this.setState({
          resume: res.data.url
        }, () => {
          console.log('resume url ', this.state)
        })
    })
    .catch((err) => {
      console.log('error ', err);
    })
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
               <label>Upload Your File </label>
                <input 
                  type="file" 
                  class="form-control" 
                  onChange={this.onChangeHandler}
                />
                <button 
                  type="button" 
                  class="btn btn-success btn-block" 
                  onClick={this.onUploadHandler}
                >
                  Upload
                </button> 
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

export default connect(mapStateToProps, { createSchedule })(Schedule);
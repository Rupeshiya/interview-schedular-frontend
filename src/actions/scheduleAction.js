import { GET_ALL_SCHEDULES, GET_RESUME_URL } from './types';
import axios from 'axios';
const baseURL = "http://localhost:5000"

export const uploader = () => async (dispatch) => {
  await axios.post(`${baseURL}/upload`)
    .then((res) => {
      dispatch({
        type: GET_RESUME_URL,
        payload: res.url
      })
    })
}

export const createSchedule = (scheduleInfo) => async (dispatch) => {
  console.log('scheduleInfo action ', scheduleInfo)
  await axios.post(`${baseURL}/admin/schedule`, scheduleInfo)
  .then((res)=>{
    console.log(res.data);
    dispatch(getAllSchedule)
  })
}

export const getAllSchedule = () => async (dispatch) => {
  console.log('calling getAllSchedule')
  await axios.get(`${baseURL}/admin/all`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_ALL_SCHEDULES,
        payload: res.data.interviews
      })
    })
}

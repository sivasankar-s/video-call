import axios from 'axios';

// const url = 'http://localhost:5000/auth'
const url = 'https://video-call-server-kcze.onrender.com/auth'

export const signUpAlum = (user) => axios.post(`${url}/registerAlumni`, user)

export const signUpStud = (user) => axios.post(`${url}/registerStudent`, user)

export const signInAlum = (user) => axios.post(`${url}/loginAlumni`, user)

export const signInStud = (user) => axios.post(`${url}/loginStudent`, user)

export const getAlum = () => axios.get(`${url}/getAlumni`)

export const getStud = () => axios.get(`${url}/getStudent`)

// export const consumer = (payload) => axios.post('/consumer', payload)

// export const broadcast = (payload) => axios.post('/broadcast', payload)

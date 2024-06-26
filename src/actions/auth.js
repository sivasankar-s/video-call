import { redirect, useNavigate } from 'react-router-dom';
import * as api from '../api/index.js';
import useAuthStore from '../store/index.js';
import router from '../route.jsx';

export const signUpAlumni = async (user) => {
    try{
        console.log('in actions')
        console.log(user)
        const { data } = await api.signUpAlum(user);
        alert("Registered Successfully, Now you can Login")
    } catch (error) {
        console.log(error.message)
    }
};

export const signUpStudent = async (user) => {
    try{
        console.log('in actions')
        console.log(user)
        const { data } = await api.signUpStud(user);
        alert("Registered Successfully, Now you can Login")
    } catch (error) {
        console.log(error.message)
    }
};

export const signInAlumni = async (user) => {
    // try{

    // let navigate = useNavigate();
        console.log('in actions')
        console.log(user)
        const { data } = await api.signInAlum(user);

        // const {signin} = useAuthStore(data);
        // useAuthStore.getState().signin(data)
        localStorage.setItem('profile', JSON.stringify({data}))
        router.navigate('/')
        // redirect('/')
        
        // navigate('/')
        

        // signin();

        // localStorage.setItem('profile', JSON.stringify({data}))
        // const resp = await api.signInAlum(user);
        console.log("after signin")
        console.log(data)

        
    // } catch (error) {
    //     console.log(error.message)
    //     console.log()
    // }
};

export const signInStudent = async (user) => {
    try{
        console.log('in actions')
        console.log(user)
        const { data } = await api.signInStud(user);

        console.log(data)

        localStorage.setItem('profile', JSON.stringify({data}))
        router.navigate('/')

        // console.log(data[0])
    } catch (error) {
        console.log(error.message)
    }
};

export const getAlumni = async () => {
    try{
        console.log('in actions')
        // console.log(user)
        const { data } = await api.getAlum();

        // console.log(data)

        return data;
    } catch (error) {
        console.log(error.message)
    }
};

export const getStudent = async () => {
    try{
        console.log('in actions')
        // console.log(user)
        const { data } = await api.getStud();

        // console.log(data)

        return data;
    } catch (error) {
        console.log(error.message)
    }
};

export const postMessage = async (message) => {
    try{
        console.log('in actions')
        // console.log(user)
        const { data } = await api.postMessage(message);

        console.log(data)

        

        // console.log(data[0])
    } catch (error) {
        console.log(error.message)
    }
};

export const getMessages = async () => {
    try{
        console.log('in actions')
        // console.log(user)
        const { data } = await api.getMessages();

        console.log(data)

        return data;
    } catch (error) {
        console.log(error.message)
    }
};

export const createEve = async (event) => {
    try{
        console.log('in actions')
        // console.log(user)
        const { data } = await api.createEvent(event);

        console.log(data)

    } catch (error) {
        console.log(error.message)
    }
};

export const getEves = async () => {
    try{
        console.log('in actions')
        // console.log(user)
        const { data } = await api.getEvents();

        console.log(data)

        return data;
    } catch (error) {
        console.log(error.message)
    }
};


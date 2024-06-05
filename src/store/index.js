import { redirect } from 'react-router-dom';
import {create} from 'zustand'

const useAuthStore = create((set) => ({
    signin: (data) => {
        set(localStorage.setItem('profile', JSON.stringify({data})))
        // redirect('/')
    },
    logout: () => {
        set(localStorage.clear())
        // redirect('/')
    }
}))

export default useAuthStore;
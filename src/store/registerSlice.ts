import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        userType: localStorage.getItem('userType') || null,
        personalInformation: JSON.parse(localStorage.getItem('personalInformation') || '{}'),
        profession: localStorage.getItem('profession') || null,
        password: localStorage.getItem('password') || null,
    },
    reducers: {
        setUserType: (state, action) => {
            state.userType = action.payload;
            localStorage.setItem('userType', action.payload);
        },
        setPersonalInformation: (state, action) => {
            state.personalInformation = action.payload;
            localStorage.setItem('personalInformation', action.payload);
        },
        setProfession: (state, action) => {
            state.profession = action.payload;
            localStorage.setItem('profession', action.payload);
        },
        setPassword: (state, action) => {
            state.password = action.payload;
            localStorage.setItem('password', action.payload);
        },
        clearRegister: (state) => {
            state.userType = null;
            state.personalInformation = null;
            state.profession = null;
            state.password = null;
            localStorage.removeItem('userType');
            localStorage.removeItem('personalInformation');
            localStorage.removeItem('profession');
            localStorage.removeItem('password');
        },
    },
})

export const { setUserType, setPersonalInformation, setProfession, setPassword, clearRegister } = registerSlice.actions;
export default registerSlice;
import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        userType: localStorage.getItem('userType') || null,
        personalInformation: JSON.parse(localStorage.getItem('personalInformation') || '{}'),
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
    },
})

export const { setUserType, setPersonalInformation } = registerSlice.actions;
export default registerSlice;
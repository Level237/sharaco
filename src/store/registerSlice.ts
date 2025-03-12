import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        userType: localStorage.getItem('userType') || null,
    },
    reducers: {
        setUserType: (state, action) => {
            state.userType = action.payload;
            localStorage.setItem('userType', action.payload);
        },
    },
})

export const { setUserType } = registerSlice.actions;
export default registerSlice;
import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        id: "",
        client_name: "Nom du Client",
        email: "Email",
        town: "Ville",
        country: "",
        phone: "",
        documentSettings: {
            backgroundColor: "#1e40af",
            includeVAT: false,
            vatRate: "20",
        },
    },

    reducers: {

        setClient: (state, action) => {
            state.client_name = action.payload.client_name;
            state.email = action.payload.email;
            state.town = action.payload.town;
            state.country = action.payload.country;
            state.phone = action.payload.phone;
        },
        setQuoteSettings: (state, action) => {
            state.documentSettings.backgroundColor = action.payload.backgroundColor;
            state.documentSettings.includeVAT = action.payload.includeVAT;
            state.documentSettings.vatRate = action.payload.vatRate;
        },
        setClientId: (state, action) => {
            state.id = action.payload.id
        }
    }
})

export const { setClient, setClientId, setQuoteSettings } = quoteSlice.actions
export default quoteSlice;
import { createSlice } from "@reduxjs/toolkit";

interface userState {
    uid: string | null,
    displayName: string | null,
    email: string | null,
    password?: string | null,
    isAuthenticated?: boolean,
    photoURL?: string | null,
    phoneNumber?: number | null,
    notification?:string | null,
    payment?:string | null,
    adress?:string | null,
    favorites?: any
}

let initialState: userState = {
    uid: null,
    displayName: "",
    email: "",
    photoURL: null,
    isAuthenticated: false,
    password: "",    
    phoneNumber: null,
    notification: null,
    payment: null,
    adress: null,
    favorites:null
}

export const UserReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL || "";
            state.email = action.payload.email;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.password = action.payload.password;            
            state.phoneNumber = action.payload.phoneNumber;            
            state.notification = action.payload.notification;
            state.adress = action.payload.adress;
            state.payment = action.payload.payment;
        },
        logout: (state) => {
            state.uid = null;
            state.displayName = null;
            state.photoURL = null;
            state.email = null;
            state.isAuthenticated = false;
            state.password = null;            
            state.phoneNumber = null;            
            state.notification = null;
            state.adress = null;
            state.payment = null;
        }
    }
})

export const { setUser } = UserReducer.actions
export default UserReducer.reducer
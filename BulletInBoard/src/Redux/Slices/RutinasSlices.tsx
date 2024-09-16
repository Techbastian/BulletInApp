import { createSlice } from "@reduxjs/toolkit";

interface rounds{
    ejercicio:string,
    repeticiones:number,
    video:string,
    peso?:number
}

interface rutinaState{
    name:string | null,
    musculo:string | null,
    rounds:number | null,
    ejercicios:rounds[] | null
}

let initialState:rutinaState = {
    name:"",
    musculo: "",
    rounds:null,
    ejercicios:null
}

export const RutinaReducer = createSlice({
    name: "user",
    initialState,
    reducers:{
        setRutinas: (state,action) =>{
            state.name = action.payload.name;
            state.musculo = action.payload.musculo;
        }
    }
})
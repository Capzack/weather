import {createSlice, createReducer, createAction, PayloadAction} from "@reduxjs/toolkit";
import {ICity} from "../../types/types";

const initialState: ICity[] = JSON.parse( localStorage.getItem('cityList') || '[]')

const add = createAction<ICity>('cityList/add')
const remove = createAction<string>('cityList/remove')
const clear = createAction('cityList/clear')
export default createReducer(initialState, builder => {
    builder
        .addCase(add, (state, action: PayloadAction<ICity>) => {
            state.push(action.payload)
            return state
        })
        .addCase(remove, (state, action: PayloadAction<string>) => {
            state = state.filter(city => city.district + city.name !== action.payload)
            return state
        })
        .addCase(clear, (state, action) => {
            state = []
            return state
        })
})


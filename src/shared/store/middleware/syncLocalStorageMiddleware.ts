import {isAction, Middleware} from "@reduxjs/toolkit";
import {RootState} from "../index";


export const syncLocalStorageMiddleware: Middleware = store => next => action  => {
        const result = next(action);
        if (isAction(action) && action.type.match('cityList')) {
            const state:RootState = store.getState();
            localStorage.setItem('cityList', JSON.stringify(state.cityListReducer));
        }
        return result;
};
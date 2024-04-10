import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "../api/weather-api";
import cityListReducer from "./reducers/cityListReducer";
import {syncLocalStorageMiddleware} from "./middleware/syncLocalStorageMiddleware";


export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        cityListReducer: cityListReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(weatherApi.middleware).concat(syncLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
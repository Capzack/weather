import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const apiKey = 'e8da47a91f727dd85652ab55d5f3f684'

interface weatherApiArg {
    lat: number,
    lon: number,
}
export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5/'
    }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (arg: weatherApiArg) => `weather?lat=${arg.lat}&lon=${arg.lon}&appid=${apiKey}`
        }),
        getForecast: builder.query({
            query: (arg: weatherApiArg) => `forecast?lat=${arg.lat}&lon=${arg.lon}&appid=${apiKey}`
        })
    })
})

export const {useGetWeatherQuery, useGetForecastQuery} = weatherApi
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IWeather } from '../types/IWeather'


// https://api.openweathermap.org/data/2.5/weather?q=Kazakhstan&lang=ru&limit=5&appid=8b09584cb4b7771d2ba7b2dc0c098caa&units=metric

const _API_KEY = '8b09584cb4b7771d2ba7b2dc0c098caa';


// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.openweathermap.org/data/2.5/weather?appid=${_API_KEY}&units=metric&lang=ru&limit=5` }),
    endpoints: (builder) => ({
        getWeather: builder.query<IWeather, string>({
            query: (name) => `&q=${name}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetWeatherQuery } = weatherApi
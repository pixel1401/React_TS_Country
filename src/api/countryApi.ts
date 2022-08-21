// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICountry } from '../types/ICountry';




const _API_KEY = '70bb155dc84b4d40862443b0a617929c';


// Define a service using a base URL and expected endpoints
export const countryApi = createApi({
    reducerPath: 'countryForWeatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.geoapify.com/v1/geocode/autocomplete` }),
    endpoints: (builder) => ({
        getCountry: builder.query<ICountry, string>({
            query: (name) => {
                let text :  string = name;
                let apiKey : string = _API_KEY;
                return {
                    url : ``,
                    params:{
                        text, apiKey 
                    }

                }
            }
            
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetCountryQuery } = countryApi
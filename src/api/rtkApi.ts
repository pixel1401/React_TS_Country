import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAllCountry } from '../types/IAllCountry'

// Define a service using a base URL and expected endpoints
export const getAllCountry = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2' }),
    endpoints: (builder) => ({
        getCountries: builder.query<IAllCountry[], any  >({
            query: ( ) => ({
                url:`/all`,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetCountriesQuery } = getAllCountry
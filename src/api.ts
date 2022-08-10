import axios from "axios";
import { IAllCountry } from "./models/IAllCountry";


const http = axios.create({
    baseURL: 'https://restcountries.com/v2'
})


export const get =  {
    getAllCountries : async () => {
        let response = await http.get('/all');
        return response.data;
    },
    getCountry : async (name : string)=> {
        let response = await http.get(`/name/${name}?fullText=true`);
        return response.data
    },

    getCountryByCode : async (code:string) => {
        let response = await http.get(`/alpha?codes=${code}`);
        return response.data;
    }



}
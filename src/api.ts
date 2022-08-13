import axios from "axios";
import { IAllCountry } from "./types/IAllCountry";


const http = axios.create({
    baseURL: 'https://restcountries.com/v2'
})


export const get =  {
    getAllCountries : async () => {
        try{
            let response = await http.get('/all');
            if(response.status === 200) {
                return response.data;
            }
            
            return null;
            
        }catch {
            return null;
        }
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
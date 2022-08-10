import React, { useEffect, useState } from 'react';
import { get } from '../../api';
import { Input } from '../../components/Input';
import { IAllCountry } from '../../models/IAllCountry';
import * as C from './style';
 
export const Countries = () =>  {

  const [countries, setCountries] = useState<IAllCountry[]>([]);


    const getAllCountries = async  () =>  {
      let data: Array<IAllCountry>  = await get.getAllCountries();
        setCountries(data);
        console.log('+1');
        
    }

    useEffect(()=> {
      getAllCountries();
    } , [])



    return <C.CountriesArea>
      <Input/>
    </C.CountriesArea>
}

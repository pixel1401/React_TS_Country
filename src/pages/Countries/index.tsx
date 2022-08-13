import React, { useEffect, useState } from 'react';
import { get } from '../../api';
import { CountryItem } from '../../components/CountryItem';
import { Input } from '../../components/Input';
import Pagination from '../../components/Pagination';
import { IAllCountry } from '../../types/IAllCountry';
import * as C from './style';


const LIMIT = 12;

export const Countries = () => {

  const [countries, setCountries] = useState<IAllCountry[]>([]);
  const [isLoad, setLoad] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const [offset, setOffset] = useState(0);
  const [isError , setError] = useState(false);

  const getAllCountries = async () => {
    setLoad(true);
    let data: Array<IAllCountry> = await get.getAllCountries();
    if(data === null) {
      return setError(true)
    }
    setCountries(data);
    
    setLoad(false);

  }

  useEffect(() => {
    getAllCountries();
  }, [])


  const filteredCountries = countries.filter(country => country.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    country.region.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const pagCountries = filteredCountries.slice(offset, offset + 12)


  if(isError) {
    return <>
      <div>Error blyaa</div>
    </>
  }else return <C.CountriesArea>
    <Input
      value={searchValue}
      setFilter={setSearchValue}
    />

    {isLoad && 
      <C.Loader>
      </C.Loader>
    }


    {
      !isLoad && (
        <>
          <C.CountryGrid>
            {
              pagCountries.map((e) => {
                return <CountryItem {...e} key={e.population} />
              })
            }
          </C.CountryGrid>
          <Pagination
            limit={LIMIT}
            total={filteredCountries.length}
            offset={offset}
            setOffset={setOffset}
          />
        </>
        
      ) 

    }
    

      

  </C.CountriesArea>
}

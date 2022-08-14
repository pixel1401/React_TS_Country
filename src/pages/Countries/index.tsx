import React, { useEffect, useState } from 'react';
import { CountryItem } from '../../components/CountryItem';
import { Input } from '../../components/Input';
import Pagination from '../../components/Pagination';
import * as C from './style';
import * as G from '../../globalStyle'
import { useGetCountriesQuery } from '../../api/rtkApi';


const LIMIT = 12;

export const Countries = () => {

  const [searchValue, setSearchValue] = useState('');
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = useGetCountriesQuery(null);




  const filteredCountries = data && data.filter(country => country.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    country.region.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const pagCountries = filteredCountries && filteredCountries.slice(offset, offset + 12)


  if(isError) {
    return <>
      <div>Error blyaa</div>
    </>
  }else 
    return <C.CountriesArea>
    <Input
      value={searchValue}
      setFilter={setSearchValue}
    />

    {isLoading && 
      <div>
        <G.Loader>
        </G.Loader>
      </div>
    }


    {
      (data && pagCountries) && (
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

import styled from "styled-components";

export const CountriesArea =  styled.main`
    /* min-height: calc(100vh) - 90px; */
`

export const CountryGrid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px ;

      @media (max-width : 860px) {
        grid-template-columns: repeat(3 , 1fr);
      }
      @media (max-width : 560px) {
        grid-template-columns: repeat(2 , 1fr);
      }
`


export const Loader = styled.div`
margin: 0 auto;
mask-type: 25px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
` 
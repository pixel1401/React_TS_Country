import styled from "styled-components";



export const  CountryItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 40px;
        .flag {
            flex: 0 1 45%;
            img {
                width: 100%;
            }
        }

        .title {
            margin-top: 0;
        }
        .info {
            flex: 0 1 50%;

            &__grid {
                display: grid;
                grid-template-columns: repeat(2 , 1fr);
                grid-gap: 10px;

                &-item {
                    font-weight: 700;
                    font-size: 17;
                }
                &-value {
                    font-weight: 400;
                    font-size: 17;
                }
            }

            &__border {
                width: fit-content;
                margin: 0 auto;
                margin-top: 15px;
                display: flex;
                flex-wrap: wrap;
                    & a {
                        display: block;
                        margin:  5px 5px;
                        padding: 5px 10px;
                        box-shadow: 1px 1px 1em rgba(var(--color-text) , 1);
                        border: 1px solid var(--color-text);
                    }
            }
        }


    @media (max-width: 800px)  {
        flex-direction: column;
        .flag {
            margin: 0 auto;
            margin-bottom: 30px;
        }
    }
`
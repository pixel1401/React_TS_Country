import styled from "styled-components";

export const Input = styled.section`
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    input {
        height: 50px;
        width: 450px;
        border-radius: 2px;
        padding: 0 10px;
        margin-right: 15px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        outline: 0;
        font-size: 14px;
    }

    select {
        border-radius: 2px;
        padding:  0 20px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        outline: 0;
        font-size: 14px;
    }



    @media (max-width: 580px ) {
        flex-direction: column;
            & input {
                width: 100%;
                margin: 25px 0;
            }
    }
`
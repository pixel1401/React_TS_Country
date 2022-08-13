import styled from "styled-components";

export const Pagination = styled.div`

    width: fit-content;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;

        li {
            margin: 0 5px;
        }

        & button.active {
            background-color: rgba(0,0,0,0.3);
            color: red;
        }

`


export const Button = styled.button`
    color: ${props => props.theme ? 'red' : 'blue'};
`
import styled from "styled-components";


export const Header = styled.header`
    height: 90px;
    box-shadow: 2px 2px 1em rgba(0,0,0,0.2);

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
            & p {
                cursor: pointer;
            }

            & h1 {
                display: block;
                margin-right: 15px;
                color: var(--color-text);

            }
    }


    .favorite { 
        position: relative;
            & span {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 10px;
                height: 10px;
                padding: 5px;
                border-radius: 50%;
                background-color: var(--color-text);
                color: var(--color-bg);
            }
    }
`
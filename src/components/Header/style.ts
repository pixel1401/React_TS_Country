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
                color: var(--color-text);
            }
    }
`
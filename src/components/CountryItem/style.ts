import styled from "styled-components";


export const ContainerCountry = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: ${props => props.theme === 'light' ? '2px 2px 2em rgba(0, 0, 0, 0.2) ' : '2px 2px 2em rgba(255, 255, 255, 0.2)' }; 

    .img {
        flex: 1 0 40%;
        & img {
            width: 100%;
            height: 100%;
        }   
    }

    .info {
        &__box {
            padding: 5px 10px;
        }
    }


`
import styled, { keyframes } from 'styled-components'


const appearFromAbove = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px)
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`

export const Card = styled.li`
    list-style: none;
    display: flex;
    padding: 20px 20px;
    font-family: monospace;
    min-width: 300px;
    cursor: pointer;
    animation: ${appearFromAbove} 0.6s;
    

    > img {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-right: 60px;
    }
`
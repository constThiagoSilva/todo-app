import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 2rem;

    border-radius: 10px;

    color: white;
    background-color: #14870c;

    font-weight: bold;

    transition: all .2s;

    &:hover {
        filter: brightness(0.9);
    }
`
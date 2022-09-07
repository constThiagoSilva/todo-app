import styled from "styled-components";

export const Container = styled.input`
    width: 100%;
    height: 2.5rem;

    padding: 10px;

    border: 1px solid #ccc;
    border-radius: 10px;


    &:focus {
        border: 1px solid #aaa;
    }

    &::placeholder {
        color: #ccc;
    }
`
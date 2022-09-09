import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;

    padding: 40px;

    border-bottom: 2px solid rgba(0,0,0,0.1);
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .concluded-container {
        color: #14870c;
        font-size: large;

        cursor: pointer;

        text-align: center;

        &:hover {
            filter: brightness(0.9);
        }
    }
`
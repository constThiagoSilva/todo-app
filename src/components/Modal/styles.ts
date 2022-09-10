import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: rgba(0,0,0,0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 80%;
    height: 60%;

    padding: 20px;

    border-radius: 10px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: white;

    .close-modal-button {
        align-self: flex-end;

        background-color: transparent;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .body {
        width: 100%;
        flex: 1;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
`
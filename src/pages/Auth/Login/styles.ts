import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 20%;
    height: 60%;

    padding: 20px;

    h1 {
        margin-bottom: 2rem;

        font-size: 1.75rem;
    }
`

export const FormContainer = styled.form`
    width: 100%;

    flex: 1;

    .input-container {
        width: 100%;

        margin-bottom: 1rem;

        position: relative;

        label {
            position: absolute;

            font-size: .5rem;
            font-weight: lighter;

            padding: 5px 0px;
            margin-left: 10px;
        }
    }
    span {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 1rem;

        font-size: xx-small;

        a {
            text-decoration: none;
            font-weight: bold;
            color: #6eaa5e;

            :hover {
                filter: brightness(0.9);
            }
        }
    }
`
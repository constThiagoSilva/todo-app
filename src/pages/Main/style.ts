import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    header {
        width: 100%;
        height: 8vh;

        .center {
            width: 80%;
            height: 100%;

            margin: 0 auto;

            display: flex;
            justify-content: center;
            align-items: center;    
            
            nav {
                width: 80%;

                display: flex;
                justify-content: space-between;

                a {
                    text-decoration: none;

                    color: black;
                    padding: 10px;
                    width: 100px;

                    text-align: center;

                    border-radius: 10px;

                    margin-right: 20px;

                    &:hover {
                        background-color: #eee;
                    }
                }
            }
        }

        .add-task-button-container {
            width: 5rem;
        }

    }
`

export const Content = styled.main`
    width: 80%;
    flex: 1;

`

export const AddTaskContainer = styled.section`

`

export const TaskListContaner = styled.section`

`
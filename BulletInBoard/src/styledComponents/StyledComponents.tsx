import styled from "styled-components";

export const MyButton = styled.button`
    background-color: #B4FFD8;
    border: none;
    border-radius: 25px;
    width: 360px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin: 0 auto;
`
export const TextoScreen = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    font-family: "Raleway", sans-serif;

    img{
        width: 300px;
        height: 220px;
    }

    h4,p{
        width: 200px;
        text-align: center;
    }

    h4{
        font-size: 16px;
    }
    p{
        font-size: 14px;
    }
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    gap: 15px;
    margin-top: 15px;
    margin: 15px auto;

    input{
        background-color: #B4FFD8;
        border: none;
        border-radius: 22px;
        width: 100%;
        height: 35px;
        font-size: 14px;
        padding: 0 15px;
        color: gray;
    }

    button{
        margin-top: 30px;
    }
`

export const LogButtons = styled.div`
    width: 80px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }

    button{
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        border: none;

        img{
            width: 100%;
            height: 100%;
        }
    }
`
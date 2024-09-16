import styled from "styled-components";


const Wrapper = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-width: 320px;
    max-width: 1400px;
    background-color: inherit;
`;

const DivInputs = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;

    input {
        all: unset;
        width: 100%;
        text-align: left;
        padding: 0.5rem;
        padding-left: 1.2rem;
        border-radius: 2rem;
        color: #fff;
        background-color: #2e3562;    
    }
`;

const DivInputsPhone = styled.div`
   position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;

    input {
        all: unset;
        width: 60px;
        height: 60px;
        text-align: center;
        font-size: 2.5rem;
        padding: 0;
        border-radius: .5rem;
        color: #fff;
        background-color: inherit;
        border: 1px solid #fff;    
    }
`;


const DivButtonSing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;

    button{
        all: unset;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.5rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: background-color .3s;

        img{
            width: 2rem;
            height: 2rem;
        }

        &:hover{
            background-color: #363D6B;
        }

    }

    hr{
        width: 1px;
        height: 2.5rem;
        filter: opacity(0.1);
    }

`;

interface DividerProps {
    height?: string;
}

const Divider = styled.div<DividerProps>`
    width: 100%;
    position: relative;
    margin: 1rem 0;
    height: ${props => props.height || '10px'};
`;

const DivButtonChoice = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;

    button {
        all: unset;
        width: 30vmin;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30vmin;
        border: 1px solid #2e3562;
        border-radius: 1em;
        cursor: pointer;
        transition: background-color .3s;

        img {
            width: 100%;
            height: 100%;
            padding: 2rem;
            object-fit: contain;
        }

        &:hover {
            background-color: #2e3562;

            img {
                animation: jello-vertical 0.9s both;
            }
        }
            
        @keyframes jello-vertical{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}100%{transform:scale3d(1,1,1)}}
    }

    .small_des {
        font-size: .7rem;
        font-weight: 200;
        width: 100%;
    }

    .button-subscription {
        height: 3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        border-radius: 2rem;
        border: 1px solid #2e3562;
        cursor: pointer;
        transition: background-color .3s;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .3rem;

            span{
                font-size: 1rem;
                font-weight: 500;
            }

            small{
                font-size: .8rem;
                font-weight: 200;
            }
        }
    }

    @media (max-width: 768px) {
        .button-subscription {
            width: 80%;
        }
    }
`;

const DivSlider = styled.div`


`;

const ContainerHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 1rem;

    .cont__row {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        color: #000;
        z-index: 11;
        gap: 1rem;

        div {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            font-size: .8rem;
            font-weight: 200;
            flex-direction: column;

            span {
                font-size: .8rem;
                font-weight: 200;
                color: #000;
                font-weight: 500;
            }
        }

        img {
            border-radius: 50%;
            object-fit: contain;
        }

       
    }
`;

const HeaderHome = styled.header`
    position: relative;
    top: 0;
    width: 100%;
    height: 180px;
    gap: 1rem;
`;

const WrapperElements = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: .8rem;
    height: 100%;
    max-width: 1400px;
    overflow-x: hidden;
    padding-bottom: 1rem;
`;

const MainHome = styled.main`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    padding-bottom: 1rem;

    .vie{
        width: 100%;
        max-width: 1400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
`;

const ContentCard = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 1rem;

    .card__info {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: .5rem;
        width: 70%;

        h3 {
            font-size: 1.2rem;
            font-weight: 600;
        }

        p {
            text-align: left;
            font-size: .7rem;
            font-weight: 200;
            color: #f1f1f1;
        }
    }
    
    .card__time {
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        gap: .5rem;
        height: 70px;

        span {
            font-size: .8rem;
            font-weight: 200;
            color: #2be7e8;
        }
    }
`;



export {

    Wrapper,
    DivInputs,
    DivInputsPhone,
    DivButtonSing,
    Divider,
    DivButtonChoice,
    DivSlider,
    ContainerHeader,
    HeaderHome,
    WrapperElements,
    MainHome,
    ContentCard

};

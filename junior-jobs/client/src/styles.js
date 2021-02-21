import styled from 'styled-components';


export const JobList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 2rem;
    padding-bottom: 4rem;

    @media (max-width: 1076px) {
        justify-content: center;
        align-items: center;
        padding-left: 0;
    }
`;

export const Filter = styled.div`
    width: 30%;
    padding: 16px 10px;
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media (max-width: 990px) {
        width: 40%;
    }

    @media (max-width: 785px) {
        width: 65%;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const Input = styled.input`
    padding: 10px 10px;
    width: 45%;
    transition: ease 0.2s;
    border-radius: 6px;
    border: 1px solid black;
    font-family: ${'Encode Sans'};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 5px black;
    }
`;



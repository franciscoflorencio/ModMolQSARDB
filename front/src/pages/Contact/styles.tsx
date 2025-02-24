import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    background-color:rgba(238, 238, 238, 0.11);
    min-height: 100vh;
    box-sizing: border-box;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    color: #191A23; /* Mantendo a cor do tema */
    margin-bottom: 20px;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
`;

export const TextArea = styled.textarea`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    height: 150px;
    resize: none;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Message = styled.p`
    font-size: 1.2em;
    color: #28a745;
    margin-top: 20px;
`;
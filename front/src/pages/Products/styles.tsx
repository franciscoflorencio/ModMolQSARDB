import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    padding: 10px;
    box-sizing: border-box;
    background-color:rgba(238, 238, 238, 0.11);
`;

export const Title = styled.h1`
    font-size: 2em; // Reduced from 2.5em
    color: #191A23; 
    margin-bottom: 15px;
`;

export const Description = styled.p`
    font-size: 1em; // Reduced from 1.2em
    color: #666;
    margin-bottom: 30px; 
    text-align: center;
    max-width: 500px; 
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px; 
`;
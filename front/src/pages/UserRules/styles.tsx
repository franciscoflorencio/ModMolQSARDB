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
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

export const RuleList = styled.ul`
    list-style-type: none;
    padding: 0;
    max-width: 800px;
    width: 100%;
`;

export const RuleItem = styled.li`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color:#979797;
    font-size: 1.1em;
    color: #f3f3f3;

    strong {
    color: #121212;
    }
`;
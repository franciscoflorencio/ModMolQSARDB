import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Spinner = styled.div`
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-left: 5px solid #767676;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin-right: 10px;
`;
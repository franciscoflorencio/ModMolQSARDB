import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const FooterContainer = styled.footer`
    position: relative;
    bottom: 0;
    background-color: #000000;
    color: white;
    padding: 3rem 2rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    
    @media (max-width: 768px) {
        padding: 2rem 1rem;
        margin-top: 1rem;
        border-radius: 0;
    }
`;

export const Items = styled.nav`
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
`;

export const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.2s ease;
    
    &:hover {
        color: #0088cc;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const UpperContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const GreenText = styled.div`
    background-color: #0088cc;
    color: black;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    font-weight: bold;
    display: inline-block;
    width: fit-content;
    
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;

export const FooterText = styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const BottonContainer = styled.div`
    display: flex;
    gap: 2rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
`;

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
`;

export const EmailInput = styled.input`
    box-sizing: border-box;
    max-width: 100%;
    border-radius: 2rem;
    padding: 1rem 1.5rem;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1rem;
    
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
    
    &:focus {
        outline: none;
        border-color: #0088cc;
    }
`;

export const SubscribeButton = styled.button`
    background-color: #0088cc;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: black;
    font-weight: bold;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
    
    &:active {
        transform: translateY(0);
    }
`;
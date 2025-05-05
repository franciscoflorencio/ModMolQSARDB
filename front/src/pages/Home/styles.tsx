import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(238, 238, 238, 0.11);
  position: relative;
  z-index: 1; /* Ensure content is above the footer */
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 531px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
`;

export const Section = styled.section`
  margin-top: 2rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Align children with space between */
  margin: 2rem;
  flex-grow: 1; /* Allow Main to grow and fill the available space */
  min-height: calc(100vh - 4rem); /* Ensure Main takes at least the full viewport height minus margins */

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const Upper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
  margin-top: auto; /* Push Bottom to the bottom of Main */

  @media (max-width: 768px) {
    margin-top: 2rem;
    align-items: center;
    flex-direction: column;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha o conteúdo à esquerda */
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Text = styled.p`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; 
  width: 498px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const BlackButton = styled.button`
  display: flex;
  padding: 20px 35px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 14px;
  background: var(--Dark, #191A23);
  color: var(--White, #FFFFFF);
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; 
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px 30px;
  }
`;

export const Pic = styled.img`
  display: flex;
  width: 512px;
  height: 512px;
  flex-shrink: 0;
  border-radius: 35px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 100px;
  border-radius: 10px;
  transition: transform 0.3s; 

  @media (max-width: 768px) {
    width: 60px;
    border-radius: 10px;
  }

  &:hover {
    transform: rotate(90deg) scale(1.1); 
  }
`;

export const SupportText = styled.p`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Southeast = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  gap: 1rem; /* Espaço entre as imagens e o texto */
`;

export const Southwest = styled.p`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; 
  text-align: left; /* Alinha o texto à esquerda */
  margin-top: 10rem; /* Espaço acima do texto */
  width: 100%; /* Garante que o texto ocupe a largura total */
`;
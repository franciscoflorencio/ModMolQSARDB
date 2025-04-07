import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh; /* Usar min-height para garantir que o conteúdo não fique cortado */
    padding: 20px; /* Aumentar o padding para melhorar a responsividade */
    box-sizing: border-box;
    background-color: rgba(238, 238, 238, 0.11);
`;

export const Title = styled.h1`
    font-size: 2em; // Tamanho reduzido para telas menores
    color: #191A23; 
    margin-bottom: 15px;
    text-align: center; /* Centralizar o título */
`;

export const Description = styled.p`
    font-size: 1em; // Tamanho reduzido para telas menores
    color: #666;
    margin-bottom: 30px; 
    text-align: center;
    max-width: 500px; 
    padding: 0 20px; /* Adicionar padding para melhorar a leitura em telas pequenas */
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px; 
    flex-wrap: wrap; /* Permitir que os botões quebrem para a próxima linha em telas pequenas */
    justify-content: center; /* Centralizar os botões */
    flex-direction: column;
`;

export const Bottom = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  gap: 1rem; /* Espaço entre as imagens e o texto */
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

import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #eeeeee;
  width: 350px; // Aumentei a largura do card
  margin: 20px;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top; // Garante que o rosto fique visível
`;

export const CardContent = styled.div`
  padding: 20px;
  flex: 1; // Faz o conteúdo ocupar o espaço restante
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Distribui o espaço entre título, descrição e links
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

export const CardDescription = styled.p`
  color: #777;
  font-size: 1em;
  margin: 10px 0; // Adiciona margem para melhor espaçamento
`;

export const CardLinks = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: none;
    color: #0077b5;
    font-size: 0.9em;
    &:hover {
      text-decoration: underline;
    }
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  min-height: 100vh; 
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #191A23; /* Mantendo a cor do tema */
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 50px;
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
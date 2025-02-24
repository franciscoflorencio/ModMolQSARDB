import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #eeeeee;
  width: 250px;
  margin: 20px;
  overflow: hidden;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

export const CardDescription = styled.p`
  color: #777;
  font-size: 1em;
`;
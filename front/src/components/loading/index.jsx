import React from 'react';
import { LoadingContainer, Spinner } from './styles';

export default function Loading() {
    return (
      <LoadingContainer>
        <Spinner />
        <span style={{ marginLeft: '10px' }}>Carregando dados...</span>
      </LoadingContainer>
    );
  };
  

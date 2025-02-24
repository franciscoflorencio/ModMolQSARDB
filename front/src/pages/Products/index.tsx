import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/button';
import { Container, Title, Description, ButtonContainer } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Products: React.FC = () => {
    return (
        <>
            <Header />
            <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Title
                    as={motion.h1}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Serviços
                </Title>
                <Description
                    as={motion.p}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Bem-vindo à página de serviços. Aqui você pode baixar nossa database e acessar o serviço de banco de dados.
                </Description>
                <ButtonContainer
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Button                 
                        href="\database"
                    >
                        Baixar database
                    </Button>
                    <Button
                        href="/Search"
                    >
                        Acessar Serviço de Banco de Dados
                    </Button>
                </ButtonContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Products;
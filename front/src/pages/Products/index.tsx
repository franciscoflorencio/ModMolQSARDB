import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/button';
import { Container, Title, Description, ButtonContainer, Bottom, Image, ImageGroup, SupportText } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Farmacia from '../../assets/farmacia_logo.png';
import UFRJ from '../../assets/ufrj_logo.png';
import CNPQ from '../../assets/cnpq_logo.png';
import Faperj from '../../assets/faperj_logo.png';

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
                <ButtonContainer>
                    <Button
                        as={motion.a}
                        href="/database.csv"
                        download="database.csv"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Baixar database
                    </Button>
                    <Button
                        as={motion.a}
                        href="/Search"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Acessar Serviço de Banco de Dados da Leishmania
                    </Button>
                    <Button
                        as={motion.a}
                        href="/Search2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Acessar Serviço de Banco de Dados da Trypanosoma Cruzi
                    </Button>
                </ButtonContainer>

                <Bottom>
                <SupportText
                  as={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Agradecemos aos nossos apoiadores:
                </SupportText>
                <ImageGroup>
                  <Image
                    as={motion.img}
                    src={Farmacia}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 0.9, rotate: 10 }}
                    dragSnapToOrigin
                    transition={{ duration: 0.3 }}
                    drag
                  />
                  <Image
                    as={motion.img}
                    src={Faperj}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 0.9, rotate: 10 }}
                    dragSnapToOrigin
                    transition={{ duration: 0.3 }}
                    drag
                  />
                  <Image
                    as={motion.img}
                    src={UFRJ}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 0.9, rotate: 10 }}
                    dragSnapToOrigin
                    transition={{ duration: 0.3 }}
                    drag
                  />
                  <Image
                    as={motion.img}
                    src={CNPQ}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 0.9, rotate: 10 }}
                    dragSnapToOrigin
                    transition={{ duration: 0.3 }}
                    drag
                  />
                </ImageGroup>
              </Bottom>
            </Container>
            <Footer />
        </>
    );
};

export default Products;
import { motion } from 'framer-motion';
import {
  Image, Text, Main, Container, Title, Upper, Bottom, TextGroup, BlackButton, Pic, StyledLink, ImageGroup, SupportText, Southeast, Southwest
} from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Molecule from '../../assets/image.png';
import Farmacia from '../../assets/farmacia_logo.png';
import UFRJ from '../../assets/ufrj_logo.png';
import CNPQ from '../../assets/cnpq_logo.png';
import Faperj from '../../assets/faperj_logo.png';

export default function Home() {
  return (
      <>
      <Header />
      <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Main>
          <Upper>
            <TextGroup>
              <Title
                as={motion.h1}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                ModMolQSAR<br />Database
              </Title>
              <Text
                as={motion.p}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Uma idealização inovadora para visualização de base de dados de Doenças Tropicais Negligenciadas (DNT’s). Neste site originado de uma parceria da Universidade Federal do Rio de Janeiro com o CNPQ você poderá observar o tópico citado e muito mais!
              </Text>
              <StyledLink to="/Search">
                <BlackButton
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Fazer consulta
                </BlackButton>
              </StyledLink>
            </TextGroup>
            <div>
              <Pic
                as={motion.img}
                src={Molecule}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                dragSnapToOrigin
                drag
              />
              <Southeast>
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
              </Southeast>
            </div>
          </Upper>
          <Bottom as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
            <Southwest
              as={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Todos os direitos reservados © 2025
            </Southwest>
          </Bottom>
        </Main>
      </Container>
      <Footer />
      </>
  );
}
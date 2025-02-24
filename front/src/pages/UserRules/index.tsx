import React from 'react';
import { Container, Title, RuleList, RuleItem } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { motion } from 'framer-motion';

const UserRules: React.FC = () => {
    return(
    
    <>
    <Header />
    <Container>
      <Title>Regras de Usuário do Laboratório ModMolQSAR</Title>
      <RuleList>
      <RuleItem
                        as={motion.li}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <strong>Respeito e Colaboração:</strong> Todos os membros devem tratar uns aos outros com respeito e colaborar de forma construtiva.
                    </RuleItem>
                    <RuleItem
                        as={motion.li}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <strong>Confidencialidade:</strong> Informações confidenciais sobre projetos e pesquisas devem ser mantidas em sigilo.
                    </RuleItem>
                    <RuleItem
                        as={motion.li}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <strong>Pontualidade:</strong> Cumprir prazos estabelecidos para entregas e reuniões é essencial para o bom andamento dos projetos.
                    </RuleItem>
                    <RuleItem
                        as={motion.li}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <strong>Uso de Recursos:</strong> Os recursos do laboratório devem ser utilizados de forma responsável e cuidadosa.
                    </RuleItem>
                    <RuleItem
                        as={motion.li}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <strong>Comunicação:</strong> Manter uma comunicação clara e eficiente com todos os membros do grupo e supervisores.
                    </RuleItem>
                    <RuleItem
                        as={motion.li}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <strong>Relatórios e Documentação:</strong> Todas as atividades e pesquisas devem ser devidamente documentadas e relatadas.
                    </RuleItem>
                    <RuleItem
                        as={motion.li}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <strong>Participação em Reuniões:</strong> A presença e participação ativa nas reuniões do laboratório são obrigatórias.
                    </RuleItem>
      </RuleList>
    </Container>
    <Footer />
    </>

    );
};

export default UserRules;
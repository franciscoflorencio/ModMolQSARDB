import React from 'react';
import { motion } from 'framer-motion';
import MemberCard from '../../components/membercard';
import { Container, Description, Title, MembersContainer } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';

import Alessandra from '../../assets/alessandra2.png';
import Rangel from '../../assets/rangel2.png';
import Thiago from '../../assets/thiago2.png';
import AnaSodero from '../../assets/ana2.png';
import BarbaraVieira from '../../assets/barbara2.png';

const members = [
  { name: 'Carlos Rangel Rodrigues', role: 'Coordenador', imgSrc: Rangel, scholarLink: "", lattesLink: " http://lattes.cnpq.br/4265523459861860" },
  { name: 'Alessandra Mendonça Teles de Souza', role: 'Vice-Coordenadora', imgSrc: Alessandra, scholarLink: "https://scholar.google.com.br/citations?hl=pt-BR&user=wnVM0gIAAAAJ", lattesLink: "http://lattes.cnpq.br/7047409069633400" },
  { name: 'Thiago ', role: 'Aluno de Doutorado', imgSrc: Thiago },
  { name: 'Ana Carolina Rennó Sodero', role: 'Professora Adjunta', imgSrc: AnaSodero, lattesLink: "http://lattes.cnpq.br/2594571837199451"},
  { name: 'Bárbara de Azevedo Abrahim Vieira', role: 'Professora Adjunta', imgSrc: BarbaraVieira, lattesLink: "http://lattes.cnpq.br/5694594751124057"}


  // ADICIONAR MEMBROS AQUI
];

const SobreNos: React.FC = () => {
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
          Sobre nós
        </Title>
        <Description
          as={motion.p}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          O Laboratório de Modelagem Molecular e QSAR (ModMolQSAR) está ligado ao Departamento de Fármacos e Medicamentos da Faculdade de Farmácia, localizada no Centro de Ciências da Saúde (CCS) da Universidade Federal do Rio de Janeiro (UFRJ). Coordenado pelo Professor Carlos Rangel Rodrigues em colaboração com a Professora Alessandra Mendonça Teles Souza, o grupo de pesquisa é constituído por pós-doutorandos, alunos de doutorado, mestrado e iniciação científica, todos com suporte financeiro proveniente de instituições como Capes, CNPq e FAPERJ.
        </Description>
        <MembersContainer>
          {members.map(member => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imgSrc={member.imgSrc}
              scholarLink={member.scholarLink}
              lattesLink={member.lattesLink}
              as={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </MembersContainer>
      </Container>
      <Footer />
    </>
  );
};

export default SobreNos;
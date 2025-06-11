import React from 'react';
import { motion } from 'framer-motion';
import { Container, Description, Title, Section, SectionTitle, SectionContent, TeamLink } from './styles.tsx';
import Header from '../../components/header';
import Footer from '../../components/footer';

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
          Sobre o ModMolQSAR
        </Title>
        <Section>
          <SectionTitle>Introdução</SectionTitle>
          <SectionContent>
            O Laboratório de Modelagem Molecular e QSAR (ModMolQSAR) é um grupo de pesquisa dedicado ao desenvolvimento e aplicação de métodos computacionais para a descoberta e otimização de fármacos. Atuamos na interface entre química, biologia e ciência de dados, utilizando ferramentas modernas de modelagem molecular, QSAR, docking molecular e inteligência artificial.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Missão e Objetivos</SectionTitle>
          <SectionContent>
            Nossa missão é contribuir para o avanço científico e tecnológico na área de fármacos, promovendo a formação de recursos humanos qualificados e a integração com outros grupos de pesquisa nacionais e internacionais. Buscamos desenvolver metodologias inovadoras e aplicá-las em projetos de relevância para a saúde pública.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Áreas de Pesquisa</SectionTitle>
          <SectionContent>
            Desenvolvemos e aplicamos metodologias de modelagem molecular, QSAR, docking molecular, simulações de dinâmica molecular e técnicas de inteligência artificial para a descoberta e otimização de fármacos. Nossas pesquisas abrangem diversas áreas, incluindo doenças negligenciadas, doenças neurodegenerativas e infecções virais.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Colaborações e Parcerias</SectionTitle>
          <SectionContent>
            Mantemos colaborações com grupos de pesquisa nacionais e internacionais, universidades, institutos de pesquisa e empresas farmacêuticas. Essas parcerias permitem a troca de conhecimentos, recursos e tecnologias, ampliando o impacto de nossas pesquisas.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Acesso e Uso dos Dados</SectionTitle>
          <SectionContent>
            Os dados e metodologias desenvolvidos pelo ModMolQSAR são disponibilizados para a comunidade científica através de publicações, bancos de dados e ferramentas computacionais. Incentivamos o uso e a colaboração com nossos recursos, seguindo as diretrizes de ciência aberta e compartilhamento de dados.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Nossa Equipe</SectionTitle>
          <SectionContent>
            Nossa equipe é composta por pesquisadores dedicados e talentosos, que trabalham juntos para alcançar nossos objetivos de pesquisa. Para conhecer mais sobre nossa equipe, visite nosso site dedicado.
          </SectionContent>
          <TeamLink href="https://equipe.modmolqsar.com.br" target="_blank" rel="noopener noreferrer">
            Conheça Nossa Equipe
          </TeamLink>
        </Section>
        <Section>
          <SectionTitle>Contato e Informações Adicionais</SectionTitle>
          <SectionContent>
            Para mais informações sobre o ModMolQSAR, suas pesquisas, colaborações ou oportunidades de parceria, entre em contato conosco através do e-mail: contato@modmolqsar.com.br. Visite também nosso site para conhecer mais sobre nossos projetos e publicações.
          </SectionContent>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default SobreNos;
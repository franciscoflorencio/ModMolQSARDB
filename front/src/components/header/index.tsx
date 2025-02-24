import { HeaderContainer, Logo, Nav, NavLink, StyledLink } from './styles';
import LogoHeader from '../../assets/logo.png';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <HeaderContainer
            as={motion.header}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <StyledLink to="/">
                <Logo
                    as={motion.img}
                    src={LogoHeader}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />
            </StyledLink>
            <Nav
                as={motion.nav}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/About">
                        Sobre nós
                    </StyledLink>
                </NavLink>
                
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Products">
                        Serviços
                    </StyledLink>
                </NavLink>

                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/UserRules">
                        Regras de Uso
                    </StyledLink>
                </NavLink>
                
                <NavLink
                    as={motion.a}
                    href="https://modmolqsar.weebly.com/"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Blog
                </NavLink>
                
                <NavLink
                    as={motion.a}
                    style={{ border: '1px solid', borderRadius: '15px', padding: '10px 15px' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Contact">
                        Faça-nos perguntas
                    </StyledLink>
                </NavLink>
            </Nav>
        </HeaderContainer>
    );
};
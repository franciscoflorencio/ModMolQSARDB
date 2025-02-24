import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Container, Title, Form, Input, TextArea, Button, Message } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.init(process.env.REACT_APP_API_KEY!);

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID!,
            process.env.REACT_APP_TEMPLATE_ID!,
            templateParams
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSubmitted(true);
        }, (err) => {
            console.log('FAILED...', err);
        });
    };

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
                    Contato
                </Title>
                {submitted ? (
                    <Message
                        as={motion.p}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Formulário enviado com sucesso!
                    </Message>
                ) : (
                    <Form
                        as={motion.form}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Input
                            as={motion.input}
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            whileFocus={{ scale: 1.05 }}
                        />
                        <Input
                            as={motion.input}
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            whileFocus={{ scale: 1.05 }}
                        />
                        <TextArea
                            as={motion.textarea}
                            placeholder="Mensagem"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            whileFocus={{ scale: 1.05 }}
                        />
                        <Button
                            as={motion.button}
                            type="submit"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Enviar
                        </Button>
                    </Form>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles';

// import { Container } from './styles';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input
        type=""
        placeholder="Adicionar repositório"
        />

        <SubmitButton disable>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;

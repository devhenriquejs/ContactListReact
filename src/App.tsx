import React from 'react';
import styled from 'styled-components';
import { Plus } from 'lucide-react';
import { Btn } from './styles/Buttons';
import ContactList from './components/ContactList';
import ContactFormDialog from './components/ContactFormDialog';
import GlobalStyles from './styles/GlobalStyles';

const Header = styled.header`
  background-color: #1e1e1e;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #00ffff;
  font-size: 1.5rem;
  margin: 0;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Title>Lista de Contatos</Title>
        <ContactFormDialog
          trigger={
            <Btn>
              <Plus size={16} /> Adicionar Contato
            </Btn>
          }
        />
      </Header>
      <ContactList />
    </>
  );
};

export default App;

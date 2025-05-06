import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';
import SkeletonCard from './SkeletonCard';
import { useAppSelector } from '../features/contacts/hooks';
import { Contact } from '../features/contacts/contactsSlice';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const ContactList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // simula carregamento (pode vir de API ou localStorage delay)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <Grid>
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </Grid>
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Pesquisar contato..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          margin: '1rem auto',
          display: 'block',
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #00ffff',
          background: '#2c2f33',
          color: 'white',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
      <Grid>
        {filtered.map((contact: Contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </Grid>
    </>
  );
};

export default ContactList;

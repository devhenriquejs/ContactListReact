import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Edit2, Trash2, Mail, Phone } from 'lucide-react';
import {
  Contact,
  removeContact,
  updateContact,
} from '../features/contacts/contactsSlice';
import { useAppDispatch } from '../features/contacts/hooks';
import toast from 'react-hot-toast';

const Card = styled(motion.div)`
  background: #2c2f33;
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  position: relative;
  max-width: 350px;
`;

const IconBar = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem;
  margin: 0.25rem 0;
  border-radius: 4px;
  border: 1px solid #444;
  background: #1e1e1e;
  color: #fff;
  outline: none;
`;

const Button = styled.button<{ variant?: 'edit' | 'delete' }>`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'edit'
      ? `
    background-color: #00ffff;
    color: #1e1e1e;
  `
      : variant === 'delete'
      ? `
    background-color: #ff4d4d;
    color: #fff;
  `
      : ''}
`;

interface Props {
  contact: Contact;
}

const ContactCard: React.FC<Props> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleUpdate = () => {
    dispatch(updateContact({ id: contact.id, name, email, phone }));
    toast.success(`${name} atualizado com sucesso!`);
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(removeContact(contact.id));
    toast.error(`${contact.name} removido da lista!`);
  };

  return (
    <Card
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <IconBar>
        <Edit2 size={18} onClick={() => setIsEditing(true)} />
        <Trash2 size={18} onClick={handleDelete} />
      </IconBar>

      {isEditing ? (
        <>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button variant="edit" onClick={handleUpdate}>
            Salvar
          </Button>
          <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
        </>
      ) : (
        <>
          <h3>{contact.name}</h3>
          <p>
            <Mail size={14} /> {contact.email}
          </p>
          <p>
            <Phone size={14} /> {contact.phone}
          </p>
        </>
      )}
    </Card>
  );
};

export default ContactCard;

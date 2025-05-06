import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styled from 'styled-components';
import { useAppDispatch } from './hooks';
import { addContact } from './contactsSlice';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const schema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('Formato de e-mail inválido'),
    phone: z.string().min(8, 'Telefone inválido'),
  })
  .required();

type FormData = z.infer<typeof schema>;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #444;
  background: #1e1e1e;
  color: #fff;
  outline: none;
`;

const Error = styled.span`
  color: #ff4d4f;
  font-size: 0.85rem;
  margin-left: 10px;
`;

const Button = styled.button`
  background: #00ffff;
  border: none;
  color: #1e1e1e;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

interface Props {
  onSuccess?: (msg: string) => void;
}

const ContactForm: React.FC<Props> = ({ onSuccess }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const newContact = { id: uuidv4(), ...data };
    dispatch(addContact(newContact));
    const msg = `${data.name} adicionado com sucesso!`;
    toast.success(msg);
    onSuccess?.(msg);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder="Nome completo" {...register('name')} />
        {errors.name && <Error>{errors.name.message}</Error>}
      </div>
      <div>
        <Input type="email" placeholder="E-mail" {...register('email')} />
        {errors.email && <Error>{errors.email.message}</Error>}
      </div>
      <div>
        <Input placeholder="Telefone" {...register('phone')} />
        {errors.phone && <Error>{errors.phone.message}</Error>}
      </div>
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  );
};

export default ContactForm;

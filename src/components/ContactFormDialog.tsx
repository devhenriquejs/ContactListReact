import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './ui/dialog';
import ContactForm from '../features/contacts/ContactForm';

interface Props {
  trigger: React.ReactNode;
}

const ContactFormDialog: React.FC<Props> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Contato</DialogTitle>
          <DialogDescription>
            Preencha os detalhes do novo contato.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
        <DialogClose className="dialog-close-button">×</DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;

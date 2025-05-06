'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import styled from 'styled-components';

// Components
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

const StyledOverlay = styled(DialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const StyledContent = styled(DialogPrimitive.Content)`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 90vw;
  width: 400px;
  transform: translate(-50%, -50%);
`;

export const DialogContent: React.FC<
  React.ComponentProps<typeof DialogPrimitive.Content>
> = ({ children, ...props }) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props}>{children}</StyledContent>
  </DialogPrimitive.Portal>
);

export const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const DialogTitle = styled(DialogPrimitive.Title)`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const DialogDescription = styled(DialogPrimitive.Description)`
  color: #ccc;
  font-size: 0.9rem;
`;

export const DialogClose = styled(DialogPrimitive.Close)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  color: #999;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

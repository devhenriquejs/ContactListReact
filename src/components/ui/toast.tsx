'use client';

import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';

const hide = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const swipeOut = keyframes`
  from { transform: translateX(var(--radix-toast-swipe-end-x)); }
  to { transform: translateX(100%); }
`;

export const ToastProvider = ToastPrimitive.Provider;

const StyledViewport = styled(ToastPrimitive.Viewport)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 320px;
  max-width: 100%;
  z-index: 9999;
`;

export const Toaster: React.FC = () => <StyledViewport />;

const StyledToast = styled(ToastPrimitive.Root)`
  background-color: #2c2f33;
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  grid-template-areas:
    'title action'
    'description action';
  grid-template-columns: auto max-content;
  gap: 0.5rem;
  align-items: center;
  color: white;
  overflow: hidden;
  position: relative;

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }
  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`;

const ToastTitle = styled(ToastPrimitive.Title)`
  grid-area: title;
  font-weight: 600;
  font-size: 1rem;
`;

const ToastDescription = styled(ToastPrimitive.Description)`
  grid-area: description;
  font-size: 0.9rem;
  color: #ccc;
`;

const ToastAction = styled(ToastPrimitive.Action)`
  grid-area: action;
  background: transparent;
  border: none;
  color: #00ffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ToastClose = styled(ToastPrimitive.Close)`
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

// Wrapper hook
export const useToast = () => {
  const [toasts, setToasts] = React.useState<React.ReactNode[]>([]);

  const toast = React.useCallback(
    ({ title, description }: { title: string; description?: string }) => {
      const id = crypto.randomUUID();
      const toastElement = (
        <StyledToast key={id} open onOpenChange={() => {}}>
          <ToastTitle>{title}</ToastTitle>
          {description && <ToastDescription>{description}</ToastDescription>}
          <ToastClose asChild>
            <button aria-label="Close">
              <X size={16} />
            </button>
          </ToastClose>
        </StyledToast>
      );
      setToasts((prev) => [...prev, toastElement]);
      // cleanup after 5s
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => (t as any).key !== id));
      }, 5000);
    },
    [],
  );

  return { toast, toasts };
};

// Mount all toasts in the viewport
export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();
  return <ToastPrimitive.Viewport asChild>{toasts}</ToastPrimitive.Viewport>;
};

import styled from 'styled-components';

export const Btn = styled.button`
  background: #00ffff;
  color: #1e1e1e;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 255, 255, 0.2);
  }
`;

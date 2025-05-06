import React from 'react';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  to { background-position: -200% 0; }
`;

const Skeleton = styled.div`
  height: 120px;
  border-radius: 8px;
  background: linear-gradient(90deg, #2c2f33 25%, #3a3d40 50%, #2c2f33 75%);
  background-size: 200% 100%;
  animation: ${shine} 1.2s infinite;
  margin: 1rem auto;
  max-width: 350px;
`;

const SkeletonCard: React.FC = () => <Skeleton />;

export default SkeletonCard;

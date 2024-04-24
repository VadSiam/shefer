import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1304px] mx-auto px-4 w-full">
      {children}
    </div>
  );
};

export default Container;
'use client'

import { useIsFetching } from '@tanstack/react-query';
import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

const Loader: React.FC = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor='#4fa94d'
        radius='20'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

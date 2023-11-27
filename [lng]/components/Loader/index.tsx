'use client'

import { useIsFetching } from '@tanstack/react-query';
import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import LoaderBody from './LoaderBody';

const Loader: React.FC = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <LoaderBody />
  );
};

export default Loader;

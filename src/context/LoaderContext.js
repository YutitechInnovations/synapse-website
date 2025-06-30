"use client";
import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const showLoader = (message = '') => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
    setLoadingMessage('');
  };

  const withLoader = async (asyncFunction, message = '') => {
    try {
      showLoader(message);
      const result = await asyncFunction();
      return result;
    } finally {
      hideLoader();
    }
  };

  return (
    <LoaderContext.Provider value={{
      isLoading,
      loadingMessage,
      showLoader,
      hideLoader,
      withLoader
    }}>
      {children}
    </LoaderContext.Provider>
  );
}; 
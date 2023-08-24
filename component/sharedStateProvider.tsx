"use client";

import React, { createContext, useContext, useState } from 'react';

type SharedStateContextType = {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
  

const SharedStateContext = createContext<SharedStateContextType | undefined>(undefined);

export function useSharedState() {
    const context = useContext(SharedStateContext);
    if (!context) {
      throw new Error('useSharedState must be used within a SharedStateProvider');
    }
    return context;
  }

export function SharedStateProvider({ children }: any) {
    const [state, setState] = useState(false);
  
    return (
      <SharedStateContext.Provider value={{ state, setState }}>
        {children}
      </SharedStateContext.Provider>
    );
  }
  
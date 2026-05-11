import React, { createContext, useState, useContext } from 'react';

const ViewContext = createContext();

export function ViewProvider({ children }) {
  // 'detailed' = duża siatka z podpisami, 'minimal' = mała siatka tylko obrazy
  const [gridView, setGridView] = useState('detailed');

  const toggleGridView = () => {
    setGridView(prev => prev === 'detailed' ? 'minimal' : 'detailed');
  };

  return (
    <ViewContext.Provider value={{ gridView, toggleGridView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useViewContext() {
  return useContext(ViewContext);
}
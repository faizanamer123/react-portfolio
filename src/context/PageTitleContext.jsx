import React, { createContext, useState, useContext } from 'react';

// Create the context
const PageTitleContext = createContext();

// Create a custom hook to use the context
export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error('usePageTitle must be used within a PageTitleProvider');
  }
  return context;
};

// Provider component
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Home');

  // Function to update the page title
  const updatePageTitle = (title) => {
    setPageTitle(title);
    // Optionally update the document title as well
    document.title = `${title} | Faizan Amir Portfolio`;
  };

  // Value to be provided to consumers
  const value = {
    pageTitle,
    updatePageTitle,
  };

  return (
    <PageTitleContext.Provider value={value}>
      {children}
    </PageTitleContext.Provider>
  );
};

export default PageTitleContext;
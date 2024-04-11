import React from 'react';
import GlobalStyles from './style/globalStyles';
import AppRoutes from 'routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

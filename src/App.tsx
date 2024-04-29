import React from 'react';
import GlobalStyles from './style/globalStyles';
import AppRoutes from 'routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

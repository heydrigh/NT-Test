import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routes from './routes';
import { ToastProvider } from 'react-toast-notifications';
import ContractProvider from './context/contracts/Contracts';

function App() {
  return (
    <div className="App">
      <ContractProvider>
        <BrowserRouter>
          <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
            <Routes />
          </ToastProvider>
        </BrowserRouter>
      </ContractProvider>
    </div>
  );
}

export default App;

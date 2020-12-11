import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routes from './routes';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
          <Routes />
        </ToastProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

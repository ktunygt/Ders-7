import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { AppSettingsProvider } from './app/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppSettingsProvider>
                <App />
            </AppSettingsProvider>
        </BrowserRouter>
    </React.StrictMode>
);

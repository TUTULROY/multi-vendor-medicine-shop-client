import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <div className='max-w-screen-xl mx-auto'>
        <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
        </div>
        </HelmetProvider>
          </QueryClientProvider>
        </AuthProvider>
          </div>
   
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditaMakeups from './components/EditaMakeup';
import Maquiagem from './Maquiagem';


const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#7346D6',
      },
      secondary: {
        main: '#91f387',
        dark: '#d2205a',
      },
      error: {
        main: '#ff0000',
      },
      warning: {
        main: '#ffff8d',
      },
      info: {
        main: '#021fd1',
      },
      success: {
        main: '#045e09',
      },
    },
});


  const router = createBrowserRouter([
    {
      path:"/",
      element: <App/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path: "/cadastro",
      element:< Cadastro/>
    },
    {
      path: "/Maquiagem",
      element:<Maquiagem/>
    },
    {
      path:"/edicao/:id",
      element: <EditaMakeups/>
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router}/>
  </ThemeProvider>
);


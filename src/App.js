import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import StorePage from './pages/Store';
import AboutPage from './pages/About';


const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout/>,
  children: [
    {path:'/',element:<StorePage/>},
    {path:'/about',element:<AboutPage/>}
  ]
}])

let App = () => {
  return (
  
    <RouterProvider router={router}/>
  );
}

export default App;

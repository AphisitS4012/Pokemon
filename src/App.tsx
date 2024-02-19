import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePege from './pages/home'
import DetailPege from './pages/detail'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePege />
    },
    {
      path: "/detail/:name",
      element: <DetailPege />
    },
  ]);
  return (
    <div className="bg-[url('/pic/pexels-felix-mittermeier-1146134.jpg')]  min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AuthForm from './pages/AuthForm.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

//  const isAuthenticated = localStorage.getItem('token');
const isAuthenticated = true;

 const router = createBrowserRouter([
 {
  path: "/",
  element: <HomePage/>,
  errorElement: <NotFoundPage/>
 },
 {
  path: "/register",
  element: <AuthForm/>,
  errorElement: <NotFoundPage/>
 },
 {
  path: '/dashboard',
  element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
  children: [
    {
      index: true,
      // element: <Dashboard />,
    },
  ],
  errorElement: <NotFoundPage />,
},

 ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AuthForm from './pages/AuthForm.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx';
import DashboardContent from './dashboardcomponents/DashboardContent.jsx'

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
  element: <ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard /></ProtectedRoute>,
  errorElement: <NotFoundPage />,
  children: [
    {
      index: true,
      element: <DashboardContent />
    },
    {
      path: 'projects',
      element: <Projects />
    }
  ]
},

 ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

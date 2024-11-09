import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardContent from './dashboardcomponents/DashboardContent';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AuthForm from './pages/AuthForm.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx';


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
  path: '/protected',
  element: <ProtectedRoute/> ,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: "",
          element: <DashboardContent />,  // DashboardContent (with the 3 cards)
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "tasks",
          // element: <Tasks />
        },
        {
          path: "reports",
          // element: <Reports />
        },
        {
          path: "settings",
          // element: <Settings />
        }
      ]
    },
  ]
},

 ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)

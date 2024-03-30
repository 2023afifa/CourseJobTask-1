import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './ErrorPage/ErrorPage';
import Root from './Root/Root';
import Home from './HomePage/Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Dashboard from './DashboardPage/Dashboard/Dashboard';
import MyTasks from './DashboardPage/MyTasks/MyTasks';
import CreateTask from './DashboardPage/CreateTask/CreateTask';
import About from "./HomePage/About/About";
import PrivateRoute from './Route/PrivateRoute';
import Update from './DashboardPage/Update/Update';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://task-management-server-xi-ashy.vercel.app/task/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      }
    ]
  },
  {
    path: "dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "createtask",
        element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>,
      },
      {
        path: "mytask",
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

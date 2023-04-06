import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import HomePage from './components/HomePage/HomePage'
import Meals from './components/Meals/Meals'
import MealDetail from './components/MealDetails/MealDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/meals',
        element: <Meals />,
        loader : () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      },
      {
        path: '/meal/:id',
        element: <MealDetail ></MealDetail>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      }
    ]   
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

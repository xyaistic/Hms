import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Counter from './Components/About/Counter.jsx'
import Todo from './Components/Contact/Todo.jsx'

const allRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='' element={<Home />} />
      <Route path='counter' element={<Counter />} />
      <Route path='todo' element={<Todo />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />

  </React.StrictMode>,
)

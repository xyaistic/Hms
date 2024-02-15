import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { gitHubLoader } from './Components/GitHub/Github.jsx'
import User from './Components/User/User.jsx'

// const allRoutes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'Contact',
//         element: <Contact />
//       },
//       {
//         path: 'Github',
//         element: <Github />
//       }
//     ]
//   }
// ])

const allRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
      loader={gitHubLoader}
       path='github' element={<Github />} />
      <Route path='user/:id' element={<User />} />
      <Route path='user/' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />

  </React.StrictMode>,
)

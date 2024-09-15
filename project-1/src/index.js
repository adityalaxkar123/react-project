import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import App from './App';*/
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './project1/Home/Home'
import About from './project1/About/About'
import Contact from './project1/Contact/Contact';
import Github, { githubLoaderInfo } from './project1/Github/Github'
import User from './project1/User/User';

/*const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },{
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'github',
        element:<Github/>
      }
    ]
  }
])*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/github' loader={githubLoaderInfo} element={<Github />} />
      <Route path='user/:userid' element={<User />} />{/*to access userid go to user and call usePrams*/}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
);
/*<App />*/


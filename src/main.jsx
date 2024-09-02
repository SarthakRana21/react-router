import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import Error from './error-page'
import Contact, {loader as contactLoader} from './routes/contact'
import {Loader as rootLoader, action as rootAction} from './routes/root'
import EditContact from './routes/edit'
import { action as editAction } from './routes/edit'
import { action as deleteAction } from './routes/destroy'
import { action as contactAction } from './routes/contact'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        errorElement: <Error />,
        action: contactAction,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        errorElement: <Error />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        errorElement: <Error />,
        loader: contactLoader,
        action: deleteAction,
      },
      // {
      //   errorElement: <Error />,
      //   children: [
      //     {index: true, element: <Error />},
      //     {
      //       path: "contacts/:contactId",
      //       element: <Contact />,
      //       loader: contactLoader,
      //       action: contactAction,
      //     }
      //   ]
      // }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)

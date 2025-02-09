import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { About, loader as aboutLoader } from './routes/About/About';
import { Reviews, loader as reviewsLoader } from "./routes/Reviewes/Reviews";
import { Market, loader as marketLoader } from "./routes/Market/Market";
import { ProductDetail, loader as productLoader } from "./routes/ProductDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'about',
        element: <About />,
        loader: aboutLoader
      },
      {
        path: 'reviews',
        element: <Reviews />,
        loader: reviewsLoader
      },
      {
        path: 'market',
        element: <Market />,
        loader: marketLoader,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
        loader: productLoader
      }
    ]
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;

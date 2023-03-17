import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home/Home.component";
import Navigation from './routes/Navigation/Navigation.component';
import Authentication from './routes/Authentication/Authentication.component';
import Shop from "./routes/Shop/Shop.component"
import Checkout from './routes/Checkout/Checkout.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "auth",
        element: <Authentication />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "checkout",
        element: <Checkout />
      }
    ]
  }
]);

const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App;

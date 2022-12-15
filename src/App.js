import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home/Home.component";
import Navigation from './routes/Navigation/Navigation.component';
import SignIn from './routes/Sign-In/SignIn.component';

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
        path: "sign-in",
        element: <SignIn />
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

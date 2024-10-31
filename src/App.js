import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Register from "./Components/Register/Register";

const { default: Login } = require("./Components/Login/Login")

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: <Login />},
        {path: '/register', element: <Register />}
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App;

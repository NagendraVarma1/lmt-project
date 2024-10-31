import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Register from "./Components/Register/Register";
import Analysis from "./Components/Pages/Analysis/Analysis";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";

const { default: Login } = require("./Components/Login/Login")

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: <Login />},
        {path: '/register', element: <Register />},
        {path: '/analysis', element: <Analysis />},
        {path: '/about', element: <About />},
        {path: '/contact', element: <Contact />}
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App;

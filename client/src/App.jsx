import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
 import LeftBar from "./components/leftbar/LeftBar"
 import RightBar from "./components/rightbar/RightBar"
 import Navbar from "./components/navbar/Navbar"
 import Home from "./pages/home/Home"
 import Profile from "./pages/profile/Profile";
 import "./style.scss";
 import { useContext } from "react";
 import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser}=useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  const ProctedRoute=({children})=>{
    if(!currentUser)
    {
      return <Navigate to="/login" />;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProctedRoute>
        <Layout/>
        </ProctedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

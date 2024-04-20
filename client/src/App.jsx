import { useState } from "react";
import "./styles/App.css";
import {
  Login,
  Register,
  ForgotPassWord,
  ResetPassWord,
  VerifyEmail,
} from "./pages/Auth/";

import { DashBoard } from "./pages/Admin";
import { Chat } from "./pages/Client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import path from "./ultils/path";
import icons from "./ultils/icons";

const router = createBrowserRouter([
  { path: path.REGISTER, element: <Register /> },
  { path: path.LOGIN, element: <Login /> },
  { path: path.FORGOT_PASSWORD, element: <ForgotPassWord /> },
  { path: path.RESET_PASSWORD, element: <ResetPassWord /> },
  { path: path.VERIFY_EMAIL, element: <VerifyEmail /> },
  { path: path.DASHBOARD, element: <DashBoard /> },
  { path: path.CHAT, element: <Chat /> },
]);

function App() {
  return (
    <>
      <div className="h-full">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

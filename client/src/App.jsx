import { useState, useEffect } from "react";
import "./styles/App.css";
import { Login, Register, ForgotPassWord, ResetPassWord } from "./pages/Auth/";
import { NotFound } from "./components";
import { DashBoard } from "./pages/Admin";
import { Chat } from "./pages/Client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import path from "./ultils/path";

const isAuthenticated = () => {
  const token = localStorage.getItem("accessToken");
  return token != null;
};

const ProtectedRoute = ({ children }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate(path.LOGIN);
    }
  }, [navigate]);

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.FORGOT_PASSWORD} element={<ForgotPassWord />} />
        <Route path={path.RESET_PASSWORD} element={<ResetPassWord />} />
        <Route
          path={path.DASHBOARD}
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path={path.CHAT}
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;

import { ReactNode, useContext } from "react";
import { Routes, Route, Navigate, RouteProps } from "react-router-dom";
import { Modal } from "../components/Modal";
import { AuthContext, IAuthContext } from "../contexts/Auth/AuthContext";
import { LoginPage } from "../pages/Auth/Login";
import { RegisterPage } from "../pages/Auth/Register";
import { MainPage } from "../pages/Main";
import { AddTaskPage } from "../pages/Main/AddTask";

interface ProtectedRouteProps {
  component: JSX.Element;
}

const ProtectedRouter = ({component}: ProtectedRouteProps): JSX.Element => {
  const token = localStorage.getItem('token')
  if (token) {
    return component
  } else {
    return <Navigate to={'/auth/login'}/>
  }
}

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="main">
        <Route path="tasks" element={<ProtectedRouter component={<MainPage/>}/>}>
          <Route path="add" element={<AddTaskPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

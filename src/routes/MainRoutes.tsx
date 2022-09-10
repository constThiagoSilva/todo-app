import { Routes, Route } from "react-router-dom";
import { Modal } from "../assets/Modal";
import { LoginPage } from "../pages/Auth/Login";
import { RegisterPage } from "../pages/Auth/Register";
import { MainPage } from "../pages/Main";
import { AddTaskPage } from "../pages/Main/AddTask";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="main">
        <Route path="tasks" element={<MainPage />}>
            <Route path="add" element={<AddTaskPage/>}/>
        </Route>
      </Route>
    </Routes>
  );
};

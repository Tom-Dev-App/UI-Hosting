import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dahboard from "./pages/dashboard/Dahboard";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import Notfound from "./pages/notfound/Notfound";
import Create from "./components/formUser/Create";
import Edit from "./components/formUser/Edit";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Celerates";
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dahboard />} />
        <Route path="/dashboard/create" element={<Create />} />
        <Route path="/dashboard/edit" element={<Edit />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;

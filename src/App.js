// import logo from "./logo.svg";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./context/AuthProvider";
import Login from "./component/Login";
import Home from "./component/home";
import SignUp from "./component/SignUp";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

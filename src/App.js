import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateNewForm from "./pages/CreateNewForm";
import Setting from "./pages/Setting";
import CreateTypeBot from "./pages/CreateTypeBot";
import FromBot from "./pages/FromBot";
import NotFound from "./pages/NotFound";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newForm" element={<CreateNewForm />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/create-typebot" element={<CreateTypeBot />} />
        <Route path="/create-typebot/:formID" element={<CreateTypeBot />} />
        <Route path="/form-bot/:formID" element={<FromBot />} />
        <Route path="/analytics/:formID" element={<Analytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

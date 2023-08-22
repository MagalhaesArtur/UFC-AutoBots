import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./main.css";
import { LoginPage } from "./pages/LoginPage";
import { SingUpPage } from "./pages/SingUpPage";
import { RecoverPasswordPage } from "./pages/RecoverPasswordPage";
import HomePage from "./pages/HomePage";
import { HomePageContent } from "./components/HomePage/HomePageContent";
import { BotPage } from "./pages/BotPage/BotPage";

const bots = [{ name: "Google" }, { name: "Linkedin" }];
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingUpPage />} />
        <Route path="/RecoverPassword" element={<RecoverPasswordPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="/home" element={<HomePageContent />}></Route>
          {bots.map((bot) => (
            <Route
              path={"/home" + bot.name.toLowerCase()}
              element={<BotPage name={bot.name} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

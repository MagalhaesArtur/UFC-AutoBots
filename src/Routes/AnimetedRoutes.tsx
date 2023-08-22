import { LoginPage } from "../pages/LoginPage";
import { SingUpPage } from "../pages/SingUpPage";
import { RecoverPasswordPage } from "../pages/RecoverPasswordPage";
import HomePage from "../pages/HomePage";
import { HomePageContent } from "../components/HomePage/HomePageContent";
import { BotPage } from "../pages/BotPage/BotPage";
import { Details } from "../pages/DetailsPage/Details";
import { NewTask } from "../pages/NewTask/NewTask";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NewTaskPart2 } from "../pages/NewTask/NewTaskPart2";
import { ChangePassword } from "../pages/ChangePassword/ChangePassword";

export const AnimetedRoutes = () => {
  const bots = [{ name: "Google" }, { name: "Linkedin" }];
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingUpPage />} />
        <Route path="/RecoverPassword" element={<RecoverPasswordPage />} />
        <Route path="/home" element={<HomePage pathname={location.pathname} />}>
          <Route path="/home" element={<HomePageContent />}></Route>
          {bots.map((bot) => (
            <>
              <Route
                path={"/home/" + bot.name.toLowerCase()}
                element={<BotPage name={bot.name} />}
              ></Route>
              <Route
                path={"/home/" + bot.name.toLowerCase() + "/details"}
                element={<Details name={bot.name} />}
              />
              <Route
                path={"/home/" + bot.name.toLowerCase() + "/newtask"}
                element={<NewTask name={bot.name} />}
              />
              <Route
                path={"/home/" + bot.name.toLowerCase() + "/newtask-2"}
                element={<NewTaskPart2 name={bot.name} />}
              />
            </>
          ))}
        </Route>
        <Route path="/changePassword" element={<ChangePassword />} />

        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </AnimatePresence>
  );
};

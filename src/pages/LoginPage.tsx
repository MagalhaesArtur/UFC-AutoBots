import { useEffect, useState } from "react";
import botImg from "../assets/bot.svg";
import { LoginForm } from "../components/Login/LoginForm";
import Preloader from "../components/Preloader/Preloader";

export function LoginPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className=" flex items-center w-screen h-screen bg-[#130f40] justify-center">
          <nav className="telaMedia:w-[75rem] w-[90%] md:w-[47rem] h-[80vh] md:flex-row  flex-col flex justify-center items-center rounded-xl md:pl-10 md:bg-white bg-[#1217c3]">
            <div className="w-1/2  flex-col hidden md:flex h-full justify-center items-center">
              <div className="text-3xl font-semibold  w-[60%]">
                Faça login para acessar nossos serviços
              </div>
              <img src={botImg} className="w-[80%] h-[60%]" alt="" />
            </div>
            <div
              id="form"
              className="md:w-1/2 w-full h-full flex md:rounded-tr-xl rounded-lg md:rounded-tl-none md:rounded-bl-none  md:rounded-br-xl flex-col justify-center "
            >
              <LoginForm />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

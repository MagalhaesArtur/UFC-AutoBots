import botImg from "../assets/bot2.svg";
import { SingUpForm } from "../components/SingUpForm";
export function SingUpPage() {
  return (
    <div className=" flex items-center w-screen h-screen bg-[#130f40] justify-center">
      <div className="telaMedia:w-[75rem] w-[90%] md:w-[47rem] h-[80vh] md:flex-row  flex-col flex justify-center items-center rounded-xl md:pl-10 md:bg-white bg-[#1217c3]">
        <div className="w-1/2  flex-col hidden md:flex h-full justify-center items-center">
          <div className="text-3xl font-semibold  w-[50%]">
            Seja bem-vindo ao nosso sistema de Web Scraping.
          </div>
          <img src={botImg} className="w-[70%] h-[50%]" alt="" />
        </div>
        <div
          id="form"
          className="md:w-1/2 w-full h-full flex md:rounded-tr-xl rounded-lg md:rounded-tl-none md:rounded-bl-none  md:rounded-br-xl flex-col justify-center "
        >
          <SingUpForm />
        </div>
      </div>
    </div>
  );
}

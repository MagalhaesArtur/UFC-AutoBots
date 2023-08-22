import { useEffect, useState } from "react";
import { Bot } from "../Bot/Bot";
import Preloader from "../Preloader";

export function HomePageContent() {
  const bots = [{ name: "Google" }, { name: "Linkedin" }];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="w-full px-8 py-3  h-full bg-[#130f40] justify-center">
          <div className="flex  flex-col justify-center">
            <span className="text-white text-4xl  font-semibold">
              UFC AutoBots
            </span>
            <span className="text-white mt-5 flex flex-col justify-center">
              <span className="text-[#36bd42] font-medium text-xl mt-4 mb-3">
                <span className="text-white"> Bem-vindo</span> &lt; usuário &gt;
                !
              </span>

              <span className="text-lg">Selecione um Bot</span>
            </span>
          </div>

          <section className="flex mt-12  gap-10">
            {bots.map((bot) => (
              <Bot name={bot.name} />
            ))}
          </section>
        </div>
      )}
    </>
  );
}

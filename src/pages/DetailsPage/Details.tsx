import { useEffect, useState } from "react";
import { BotProps } from "../../utils/interfaces";
import Preloader from "../../components/Preloader";

export const Details = ({ name }: BotProps) => {
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
        <div className="max-w-[95%] px-8 py-3  h-full  justify-center">
          <div className="flex  flex-col justify-center">
            <span className="text-white text-4xl  font-semibold">
              UFC AutoBots
            </span>
            <span className="text-white mt-10 text-2xl font-semibold">
              <h1>
                Bot <span className="text-[#36bd42]">{name}</span>
              </h1>{" "}
              <br />
              <br />
              <h2>Informações sobre a execução</h2>
              <br />
              <div className="flex text-lg telaMedia:text-xl telaGrande:text-2xl justify-between items-center telaMedia:w-[95%] w-[70%] gap-6 flex-col telaMedia:flex-row border-2 border-[#36bd42] p-4 rounded-lg">
                <span>
                  Data/Hora:{" "}
                  <span className="p-1 text-slate-300 rounded-md border-0  ">
                    2023-08-01 08:00:00
                  </span>
                </span>
                <span>
                  Task:{" "}
                  <span className="p-1 text-slate-300 rounded-md border-0  ">
                    070d67c8-4448-4714-9e89-f934bbf
                  </span>
                </span>
                <span>
                  Status:{" "}
                  <span className="p-1 text-slate-300 rounded-md border-0  ">
                    Sucesso
                  </span>
                </span>
              </div>
            </span>
            <div className="mt-10 w-[90%] telaMedia:w-[95%] text-white">
              <table className=" w-full border-[#36bd42] border-2  rounded-lg  border-separate">
                <thead className=" bg-[#2f60d1]">
                  <tr className="text-left ">
                    <th>Data/Hora</th>
                    <th>Mensagem</th>
                  </tr>
                </thead>
                <tbody className="text-xl">
                  <tr>
                    <td>2023-08-21 10:00 PM</td>
                    <td>Acessando https://www.br.linkedin.com</td>
                  </tr>
                  <tr>
                    <td>2023-08-21 10:00 PM</td>
                    <td>Aplicando string de busca</td>
                  </tr>
                  <tr>
                    <td>2023-08-21 10:01 PM</td>
                    <td>Submetendo pesquisa</td>
                  </tr>
                  <tr>
                    <td>2023-08-21 10:01 PM</td>
                    <td>Contando numero de resultados obtidos</td>
                  </tr>
                  <tr>
                    <td>2023-08-21 10:02 PM</td>
                    <td>1000 resultados obtidos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

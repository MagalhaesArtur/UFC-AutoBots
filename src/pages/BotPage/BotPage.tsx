import { useEffect, useState } from "react";
import { BotProps } from "../../utils/interfaces";
import "./index.css";
import Preloader from "../../components/Preloader";

export const BotPage = ({ name }: BotProps) => {
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
            <span className="text-white mt-10 text-2xl font-semibold">
              Bot <span className="text-[#36bd42]">{name}</span> <br />
              <br />
              Histórico de execuções
            </span>

            <div className="mt-10 w-full text-white">
              <table className=" w-[90%] border-black  border-2  rounded-lg  border-separate">
                <thead className=" bg-[#2f60d1]">
                  <tr className="text-left ">
                    <th>Data/Hora</th>
                    <th>Task Id</th>
                    <th>Status</th>
                    <th>Detalhes</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td>2023-08-21 10:00 AM</td>
                    <td>070d67c8-4448-4714-9e89-f934bbfc0c49 </td>
                    <td>Em andamento</td>
                    <td>
                      <button>Ver Detalhes</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2023-08-22 02:30 PM</td>
                    <td>070d67c8-4448-4714-9e89-f934bbfc0c49 </td>
                    <td>Concluída</td>
                    <td>
                      <button>Ver Detalhes</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2023-08-19 5:30 PM</td>
                    <td>01f8e174f-73fa-406d-91f8-acf4d36ae56 </td>
                    <td>Falha</td>
                    <td>
                      <button>Ver Detalhes</button>
                    </td>
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

import { useEffect, useState } from "react";
import { BotProps } from "../../utils/interfaces";
import "./index.css";
import Preloader from "../../components/Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const BotPage = ({ name }: BotProps) => {
  const [loading, setLoading] = useState(true);
  const [loadingButtom, setLoadingButtom] = useState(false);

  let navigate = useNavigate();

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
          <div className="flex w-[90%]  flex-col justify-center">
            <span className="text-white text-4xl  font-semibold">
              UFC AutoBots
            </span>
            <span className="text-white mt-10 text-2xl font-semibold">
              Bot <span className="text-[#36bd42]">{name}</span> <br />
              <br />
              Histórico de execuções
            </span>

            <div className="mt-10 w-[95%] text-white flex flex-col ">
              <table className=" w-full border-black  border-2  rounded-lg  border-separate">
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
                      <button
                        onClick={() => {
                          navigate("/home/" + name.toLowerCase() + "/details");
                        }}
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2023-08-22 02:30 PM</td>
                    <td>070d67c8-4448-4714-9e89-f934bbfc0c49 </td>
                    <td>Concluída</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate("/home/" + name.toLowerCase() + "/details");
                        }}
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2023-08-19 5:30 PM</td>
                    <td>01f8e174f-73fa-406d-91f8-acf4d36ae56 </td>
                    <td>Falha</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate("/home/" + name.toLowerCase() + "/details");
                        }}
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                id="submitButton"
                type="button"
                onClick={() => {
                  setLoadingButtom(true);
                  setTimeout(() => {
                    setLoadingButtom(false);
                    navigate("/home/" + name.toLowerCase() + "/newtask");
                  }, 1000);
                }}
                className="flex justify-center !w-52 mt-10 items-center self-end"
              >
                {loadingButtom ? (
                  <CircularProgress size={30} color="inherit" />
                ) : (
                  <div>Nova Execução</div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
